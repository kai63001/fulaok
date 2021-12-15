import type { NextPage } from "next";
import Layout from "@/components/Layout";
import Card from "@/components/custom/Card";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
        <Card image="https://petmaya.com/wp-content/uploads/2021/12/architecture.jpg">20 สถาปัตยกรรมจากประเทศต่าง ๆ ที่ผู้คนต่างปรบมือให้ในความสุดยอด</Card>
        <Card image="https://petmaya.com/wp-content/uploads/2021/12/ridiculous-tourists.jpg">15 ความเฟลของนักท่องเที่ยวตามสถานที่ท่องเที่ยวต่าง ๆ ทั่วโลก</Card>
        <Card image="https://petmaya.com/wp-content/uploads/2021/12/architecture.jpg">123123</Card>
        <Card image="https://petmaya.com/wp-content/uploads/2021/12/architecture.jpg">12312</Card>
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
