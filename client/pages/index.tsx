import type { NextPage } from "next";
import Layout from "@/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      adasdsa
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  // console.log(context.locale);
  return {
    props: {},
  };
}

export default Home;
