import getMenus from "@/functions/wordpress/menus/getMenus";
import formatDefaultSeoData from "@/functions/wordpress/seo/formatDefaultSeoData";
import { Console } from "console";

import { getGqlString, logPageQuery } from "./logPageQuery";

const wpAppUser = process.env.WORDPRESS_APPLICATION_USERNAME;
const wpAppPass = process.env.WORDPRESS_APPLICATION_PASSWORD;

// Set WP application password auth header.
let wpAuthorization = Buffer.from(`${wpAppUser}:${wpAppPass}`).toString(
  "base64"
);

/**
 * Retrieve single post.
 *
 * @author WebDevStudios
 * @param  {string}          postType  WP post type.
 * @param  {number | string} id        Post identifier.
 * @param  {object}          query     Post retrieval query.
 * @param  {object}          variables Query variables.
 * @param  {string}          preview   Whether query is for a regular post view (null), a preview check (basic), or full post preview (full).
 * @return {object}                    Object containing Apollo client instance and post data or error object.
 */
export default async function processPostTypeQuery(
  postType,
  id,
  query,
  variables = {},
  preview = null
) {
  // Set up return object.
  const response = {
    apolloClient: {},
    error: false,
    errorMessage: null,
  };

  // If no query is set for given post type, return error message.
  if (!query) {
    return {
      apolloClient: {},
      error: true,
      errorMessage: `Post type \`${postType}\` is not supported.`,
    };
  }

  if (!preview) {
    wpAuthorization = null;
  }

  //
  //

  // Console log the page query
  logPageQuery(query, variables);

  // Execute query.
  response.post = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${wpAuthorization}`,
    },
    body: JSON.stringify({
      query: `
        ${getGqlString(query)}
      `,
      variables,
    }),
  })
    .then(async (data) => {
      const res = await data.json();

      const { homepageSettings, siteSeo, menus, ...postData } = res.data || {};

      if (process.env.NODE_ENV === "development") {
        //
        //
        //
      }

      // Retrieve menus.
      response.menus = getMenus(menus);

      //

      // Add fake "static query" by adding these fields as children of the page object
      if (postType === "page") {
        const array = [
          "childPages",
          "homePage",
          "latestNews",
          "pageData",
          "pageDataSecondary",
          "avPosts",
          "postCount",
          "posts",
          "filters",
          "categories",
          "people",
          "peoples",
        ];
        array.forEach((item, index) => {
          if (res.data[item]) {
            postData.page[item] = res.data[item];
          }
        });
      }

      // Retrieve default SEO data.
      response.defaultSeo = formatDefaultSeoData({ homepageSettings, siteSeo });

      // Retrieve post data.
      const post =
        postData?.[postType] ?? // Dynamic posts.
        postData?.headlessConfig?.additionalSettings.pages.error404Page; // Settings custom page.

      response.siteOptions = res.data.headlessConfig || {};
      // Set error props if data not found.
      if (!post) {
        response.error = true;
        response.errorMessage = `An error occurred while trying to retrieve data for ${postType} "${id}."`;

        return null;
      }

      return post;
    })
    .then(async (post) => {
      // Add slug/ID to post.
      const newPost = {
        ...post,
        slug: id,
      };

      if (preview === "basic" || !post || !post?.blocksJSON) {
        return post;
      }

      return newPost;
    })
    .catch((error) => {
      response.error = true;
      response.errorMessage = error.message;

      console.log("");
      console.log("🚫🚫🚫 ======= START: Avenue Query Error ===== 🚫🚫🚫");
      console.log("");
      console.log(error);
      console.log("");
      console.log("😭😭😭 END: Avenue Query Error ===== 😭😭😭");
      console.log("");

      return null;
    });

  return response;
}
