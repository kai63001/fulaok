import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import Layout from "@/components/Layout";

const Read = (props: any) => {
  console.log(props.data);
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: props.data.detail }} />
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const snap = await getDoc(doc(db, "post", context.params.id));
  
  return {
    props: {
      data: snap.data(),
    },
  };
}

export default Read;
