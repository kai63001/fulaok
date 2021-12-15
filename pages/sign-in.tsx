import Layout from "@/components/Layout";
import { sign_in_lang } from "@/lang/sign-in.lang";
import { useRouter } from "next/router";
import Input from "@/components/custom/Input"

const SignIn = () => {
  const { locale = "en" } = useRouter();

  return (
    <Layout>
      <div className="flex h-screen -mt-10 w-full">
        <div className="m-auto w-11/12 sm:w-3/6">
          <div className="bg-gray-300 rounded-md p-113">
          <div className="bg-white rounded-md p-10">
            <h1 className="text-3xl font-medium">
              {sign_in_lang["signin"][locale]}
            </h1>
            <p>{sign_in_lang["signinDetail"][locale]}</p>
            <form className="mt-2">
              <Input label={sign_in_lang["email"][locale]} name="email" placeholder="luna@moonsblog.com" />
              <Input label={sign_in_lang["password"][locale]} name="password" type="password" placeholder="password" />
            </form>
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
