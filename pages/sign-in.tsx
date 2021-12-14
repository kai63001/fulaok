import Layout from "@/components/Layout";
import { sign_in_lang } from "@/lang/sign-in.lang";
import { useRouter } from "next/router";
import Input from "@/components/custom/Input"

const SignIn = () => {
  const { locale = "en" } = useRouter();

  return (
    <Layout>
      <div className="flex h-screen w-full">
        <div className="m-auto w-5/6 sm:w-3/6">
          <div className="shadow-md rounded-sm p-10">
            <h1 className="text-3xl font-medium">
              {sign_in_lang["signin"][locale]}
            </h1>
            <p>ยินดีต้อนรับเข้าสู่โลกแห่งสาระและความรู้</p>
            <form className="mt-2">
              <Input />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
