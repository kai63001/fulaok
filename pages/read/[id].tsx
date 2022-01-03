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
import { date } from "@/lib/dayjs";
import { useRouter } from "next/router";
import Image from "next/link";

const Read = (props: any) => {
  const { locale = "en" } = useRouter();
  const detailOutOptimize = (html: string): string => {
    return html.replace(
      /<img.*?src="(.*?)"[^\>]+>/g,
      '<img class="bg-purple-600" width="100%" src="/_next/image?url=' +
        "$1" +
        '&w=1200&q=75" loading="lazy" />'
    );
  };
  return (
    <Layout>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div className="overflow-hidden col-span-2">
          <h1 className="text-4xl font-medium mb-1">{props.data.title}</h1>
          <p className="text-gray-600">{date(props.data.date, locale)}</p>
          <div
            className="no-tailwindcss-base"
            dangerouslySetInnerHTML={{
              __html: detailOutOptimize(props.data.detail),
            }}
          />
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
  // console.log(snap);
  // const user: any = await getDoc(doc(db, "users", snap));
  return {
    props: {
      data: snap,
    },
  };
}

export default Read;
