import type { NextPage } from "next";
import Layout from "@/components/Layout";
import Card from "@/components/custom/Card";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

const Home: NextPage = (props: any) => {
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
        {props.data.map((data: any, i: any) => {
          return (
            <Card id={data.id} image={data.image}>
              {data.title}
            </Card>
          );
        })}
        {/* <Card image="https://petmaya.com/wp-content/uploads/2021/12/architecture.jpg">
          20 สถาปัตยกรรมจากประเทศต่าง ๆ ที่ผู้คนต่างปรบมือให้ในความสุดยอด
        </Card>
        <Card image="https://petmaya.com/wp-content/uploads/2021/12/ridiculous-tourists.jpg">
          15 ความเฟลของนักท่องเที่ยวตามสถานที่ท่องเที่ยวต่าง ๆ ทั่วโลก
        </Card>
        <Card image="https://petmaya.com/wp-content/uploads/2021/12/architecture.jpg">
          123123
        </Card>
        <Card image="https://petmaya.com/wp-content/uploads/2021/12/architecture.jpg">
          12312
        </Card> */}
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  // console.log(context.locale);
  let data: any = [];
  const q: any = await getDocs(query(collection(db, "post")));
  q.forEach((doc: any) => {
    let fixData = doc.data();
    fixData.userId = [];
    fixData.id = doc.id;
    data.push(fixData);
  });

  return {
    props: {
      data,
    },
  };
}

export default Home;
