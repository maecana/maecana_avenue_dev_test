import getPostTypeStaticPaths from "@/functions/wordpress/postTypes/getPostTypeStaticPaths";
import getPostTypeStaticProps from "@/functions/wordpress/postTypes/getPostTypeStaticProps";
import { InternalScreen } from "@screens";

// Define route post type.
const postType = "people";

export default function People(props) {
  const { post } = props;
  return <InternalScreen {...post} />;
}

export async function getStaticPaths() {
  return await getPostTypeStaticPaths(postType);
}

export async function getStaticProps({ params, preview, previewData }) {
  return getPostTypeStaticProps(params, postType, preview, previewData);
}
