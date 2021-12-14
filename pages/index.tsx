import type { NextPage } from "next";
import Layout from "@/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="">
          <img
            src="https://petmaya.com/wp-content/uploads/2021/12/architecture.jpg"
            alt=""
            className="rounded-md"
          />
          <p className="text-xl">20 สถาปัตยกรรมจากประเทศต่าง ๆ ที่ผู้คนต่างปรบมือให้ในความสุดยอด</p>
        </div>
        <div className="">
          <img
            src="https://petmaya.com/wp-content/uploads/2021/12/architecture.jpg"
            alt=""
          />
        </div>
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
