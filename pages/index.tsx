import type { NextPage } from "next";
import Layout from "@/components/Layout";
import Card from "@/components/custom/Card";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
        <Card>20 สถาปัตยกรรมจากประเทศต่าง ๆ ที่ผู้คนต่างปรบมือให้ในความสุดยอด</Card>
        <Card>123333</Card>
        <Card>123123</Card>
        <Card>12312</Card>
      </div>
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
