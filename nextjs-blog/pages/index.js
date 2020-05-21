import Layout from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";
import FetchData from "../components/fetchData/fetchData";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home() {
  return (
    <Layout>
      <FetchData name={"Singapore"} />
    </Layout>
  );
}
