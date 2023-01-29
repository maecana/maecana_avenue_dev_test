import getPagePropTypes from "@/functions/getPagePropTypes";
import getPostTypeStaticPaths from "@/functions/wordpress/postTypes/getPostTypeStaticPaths";
import getPostTypeStaticProps from "@/functions/wordpress/postTypes/getPostTypeStaticProps";
import { InternalScreen } from "@screens";

const postType = "post";

export default function NewsArticle({ post }) {
  return <InternalScreen {...post} />;
}

export async function getStaticPaths() {
  return await getPostTypeStaticPaths(postType);
}

export async function getStaticProps({ params, preview, previewData }) {
  return getPostTypeStaticProps(params, postType, preview, previewData);
}

NewsArticle.propTypes = {
  ...getPagePropTypes(postType),
};
