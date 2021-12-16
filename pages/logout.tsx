import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Firebase } from "@/lib/firebase";
import { useRouter } from "next/router";
import { useCookies } from 'react-cookie';

const Logout = () => {
  const router = useRouter();
  const [removeCookie] = useCookies();

  const App = Firebase;
  const auth = getAuth();
  useEffect(() => {
    signOut(auth)
      .then(() => {
        // removeCookie("user");
        router.push("/sign-in", undefined, { shallow: true });
      })
      .catch((error) => {
        // An error happened.
      });
  }, [auth,router]);
  return <div></div>;
};

export default Logout;
