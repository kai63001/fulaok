import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Firebase } from "@/lib/firebase";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const Logout = () => {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();

  const App = Firebase;
  const auth = getAuth();
  useEffect(() => {
    signOut(auth)
      .then(() => {
        removeCookie("user");
        window.location.href = `/${router.locale}/sign-in`;
      })
      .catch((error) => {
        // An error happened.
      });
  }, [auth, router, removeCookie]);
  return <div></div>;
};

export default Logout;
