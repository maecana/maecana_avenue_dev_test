import getPostTypeStaticProps from "@/functions/wordpress/postTypes/getPostTypeStaticProps";
import { HomeScreen } from "@screens";

const postType = "page";

const Home = ({ post }: any) => {
  const { avSearchItems, siteOptions } = post;

  // Display dynamic page data if homepage retrieved from WP.
  if (post && Object.keys(post).length > 0) {
    return (
      <HomeScreen
        items={avSearchItems.avSearchItemsData}
        callToAction={siteOptions.additionalSettings.callToAction}
      />
    );
  }

  return null;
};

export async function getStaticProps({ preview, previewData }: any) {
  return getPostTypeStaticProps(
    {
      slug: "/",
    },
    postType,
    preview,
    previewData
  );
}

export default Home;
