import Layout from "@/components/Layout";
import { sign_in_lang } from "@/lang/sign-in.lang";
import { useRouter } from "next/router";
import Input from "@/components/custom/Input";
import Button from "@/components/custom/Button";
import Link from "next/link";
import FacebookButton from "@/components/login/FacebookButton";
import GoogleButton from "@/components/login/GoogleButton";

const SignIn = () => {
  const { locale = "en" } = useRouter();

  return (
    <Layout>
      <div className="flex h-screen -mt-10 w-full">
        <div className="m-auto w-11/12 sm:w-3/6">
          <div className="bg-gray-300 rounded-md p-113">
            <div className="bg-white rounded-md p-10">
              <h1 className="text-3xl font-medium text-purple-800">
                {sign_in_lang["signin"][locale]}
              </h1>
              <p>{sign_in_lang["signinDetail"][locale]}</p>
              <form className="mt-2">
                <Input
                  label={sign_in_lang["email"][locale]}
                  name="email"
                  placeholder="luna@moonsblog.com"
                />
                <Input
                  label={sign_in_lang["password"][locale]}
                  name="password"
                  type="password"
                  placeholder="password"
                />
                <br />
                <div className="sm:flex justify-between">
                  <div className="order-2 sm:order-1">
                    <Link href="/forgot-password">
                      <a className="text-purple-800">Forgot your password?</a>
                    </Link>
                  </div>
                  <Button full border>{sign_in_lang["signin"][locale]}</Button>
                </div>
                <div className="text-center mt-2">
                  <Link href="/sign-up">
                    <a className="text-purple-800">
                      <span className="text-mute">Don't have an account?</span>{" "}
                      Sign Up
                    </a>
                  </Link>
                </div>
              </form>
              <hr className="mt-5 mb-4 border-purple-700" />
              <FacebookButton/>
              <GoogleButton/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
