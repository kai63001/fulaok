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
            <Card key={i} id={data.id} image={data.image}>
              {data.title}
            </Card>
          );
        })}
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
