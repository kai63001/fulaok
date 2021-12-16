import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Firebase } from "@/lib/firebase";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();

  const App = Firebase;
  const auth = getAuth();
  useEffect(() => {
    signOut(auth)
      .then(() => {
        router.push("/sign-in", undefined, { shallow: true });
      })
      .catch((error) => {
        // An error happened.
      });
  }, [auth,router]);
  return <div></div>;
};

export default Logout;
