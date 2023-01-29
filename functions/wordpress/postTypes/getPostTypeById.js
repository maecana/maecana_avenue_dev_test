import isHierarchicalPostType from "@/functions/wordpress/postTypes/isHierarchicalPostType";
import processPostTypeQuery from "@/functions/wordpress/postTypes/processPostTypeQuery";
import {
  queryCampaignLandingById,
  queryContactById,
  queryPageById,
  queryPageHomeById,
  queryPageIndexById,
  queryPageNewsIndexById,
  queryPageSearchById,
  queryPageTeamIndexById,
} from "@/lib/wordpress/pages/queryPageById";
import queryPeopleById from "@/lib/wordpress/people/queryPeopleById";
import queryPostById from "@/lib/wordpress/posts/queryPostById";

const wpAppUser = process.env.WORDPRESS_APPLICATION_USERNAME;
const wpAppPass = process.env.WORDPRESS_APPLICATION_PASSWORD;

// Set WP application password auth header.
let wpAuthorization = Buffer.from(`${wpAppUser}:${wpAppPass}`).toString(
  "base64"
);

/**
 * Retrieve single post by specified identifier.
 *
 * @author WebDevStudios
 * @param  {string}          postType WP post type.
 * @param  {number | string} id       Post identifier.
 * @param  {string}          idType   Type of ID.
 * @param  {string}          preview  Whether query is for a regular post view (null), a preview check (basic), or full post preview (full).
 * @return {object}                   Object containing Apollo client instance and post data or error object.
 */
export default async function getPostTypeById(
  postType,
  id,
  idType = "SLUG",
  preview = null
) {
  // Define single post query based on post type.
  const postTypeQuery = {
    home: queryPageHomeById,
    indexpage: queryPageById,
    page: queryPageById,
    post: queryPostById,
    people: queryPeopleById,
  };

  let pageTemplate = "default";

  let databaseId;

  if (!preview) {
    wpAuthorization = null;
  }

  if (postType === "page" && id !== "undefined") {
    const variables = {
      id,
      idType: preview === "basic" || !isNaN(id) ? "DATABASE_ID" : "URI",
    };

    const pageQuery = await fetch(
      `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${wpAuthorization}`,
        },
        body: JSON.stringify({
          query: `
          query GET_PAGE_BY_ID(
            $id: ID!
            $idType: PageIdType = URI
          ) {
            page(id: $id, idType: $idType) {
              templateSlug
              databaseId
            }
          }
        `,
          variables,
        }),
      }
    );

    const pageData = await pageQuery.json();

    if (pageData?.errors) {
      const errorMsg = pageData?.errors[0]?.message;
      throw Error(errorMsg);
    }

    databaseId = pageData.data?.page?.databaseId;
    pageTemplate = pageData.data?.page?.templateSlug;
  }

  // Check if post type is hierarchical.
  const isHierarchical = isHierarchicalPostType(postType);

  // Fix default ID type for hierarchical posts.
  idType = !isHierarchical || idType !== "SLUG" ? idType : "URI";

  // Retrieve post type query.
  const query =
    postTypeQuery?.[pageTemplate === "default" ? postType : pageTemplate] ??
    null;

  return processPostTypeQuery(
    postType,
    id,
    query,
    { id, idType, databaseId },
    preview
  );
}
