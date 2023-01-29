/* eslint-disable import/extensions */
import getPostTypeStaticPaths from "@/functions/wordpress/postTypes/getPostTypeStaticPaths";
import getPostTypeStaticProps from "@/functions/wordpress/postTypes/getPostTypeStaticProps";
// eslint-disable-next-line import/order
import { InternalScreen } from "@screens";

// Define route post type.
const postType = "page";

export default function Page({ post }: any) {
  return <InternalScreen {...post} />;
}

export async function getStaticPaths() {
  return await getPostTypeStaticPaths(postType);
}

export async function getStaticProps({ params, preview, previewData }: any) {
  return getPostTypeStaticProps(params, postType, preview, previewData);
}
