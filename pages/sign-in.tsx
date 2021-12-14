import Layout from "@/components/Layout";
import { sign_in_lang } from "@/lang/sign-in.lang";
import { useRouter } from "next/router";

const SignIn = () => {
  const { locale = "en" } = useRouter();

  return (
    <Layout>
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="bg-red-200 p-5">
          <h1 className="text-3xl font-medium">{sign_in_lang["signin"][locale]}</h1>
          ยินดีต้อนรับเข้าสู่โลกแห่งสาระและความรู้
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
