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
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
        <div className="overflow-hidden col-span-3">
          <div dangerouslySetInnerHTML={{ __html: props.data.detail }} />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const snap: any = await getDoc(doc(db, "post", context.params.id)).then(
    async (nowSnap: any) => {
      const user = await getDoc(nowSnap.data().userId);
      return {
        ...nowSnap.data(),
        ["userId"]: user.data(),
      };
    }
  );
  console.log(snap);
  // const user: any = await getDoc(doc(db, "users", snap));
  return {
    props: {
      data: snap,
    },
  };
}

export default Read;
