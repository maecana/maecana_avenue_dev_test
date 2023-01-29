import isHierarchicalPostType from "@/functions/wordpress/postTypes/isHierarchicalPostType";
import isValidPostType from "@/functions/wordpress/postTypes/isValidPostType";
import { postTypes } from "@/lib/wordpress/_config/postTypes";
import { initializeWpApollo } from "@/lib/wordpress/connector";
import { gql } from "@apollo/client";

/**
 * Retrieve static paths by post type.
 *
 * @author WebDevStudios
 * @param  {string} postType WP post type.
 * @return {object}          Post type paths.
 */
export default async function getPostTypeStaticPaths(postType) {
  if (!postType || !isValidPostType(postType)) {
    return null;
  }

  // Retrieve post type plural name.
  const { pluralName } = postTypes[postType];

  // Check if post type is hierarchical.
  const isHierarchical = isHierarchicalPostType(postType);

  // Determine path field based on hierarchy.
  const pathField = isHierarchical ? "uri" : "slug";

  // Construct query based on post type.
  const query = gql`
    query GET_SLUGS($amount: Int!) {
      ${pluralName}(first: $amount) {
        edges {
          node {
            ${pathField}
          }
        }
      }
    }
  `;

  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo();

  // Execute query.
  const posts = await apolloClient.query({
    query,
    variables: {
      amount: process.env.VERCEL_ENV === "development" ? 1 : 10000,
    },
  });

  // Process paths.
  const paths = !posts?.data?.[pluralName]?.edges
    ? []
    : posts.data[pluralName].edges
        .map((post) => {
          // Trim leading and trailing slashes then split into array on inner slashes.
          const slug = post.node[pathField].replace(/^\/|\/$/g, "").split("/");

          return {
            params: {
              slug,
            },
          };
        })
        // Filter out certain posts with custom routes (e.g., homepage).
        .filter((post) => !!post.params.slug.join("/").length);

  return {
    paths,
    fallback: "blocking",
  };
}
