import { useRouter } from "next/router";
import { Navbar_lang } from "@/lang/components/Navbar.lang";
import Link from "next/link";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Firebase } from "@/lib/firebase";
import Button from "@/components/custom/Button";
import { addDataUser } from "@/redux/actions/loginAction";
import { connect } from "react-redux";
const User = dynamic(
  //@ts-ignore
  () => import("@/components/user/profileNavbar"),
  { ssr: false }
);
// import User from "@/components/user/profileNavbar";
import { useCookies } from "react-cookie";
import dynamic from "next/dynamic";

const Navbar = (props: any) => {
  const { locale = "en" } = useRouter();
  const [cookies, setCookie] = useCookies();
  const App = Firebase;
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // setCookie({})
        setCookie("user", JSON.stringify(user));
      }
    });
  }, [auth, props]);
  const linker = [
    {
      name: "lifestyle",
      link: "/lifestyle",
    },
    {
      name: "creativity",
      link: "/creativity",
    },
    {
      name: "entertainment",
      link: "/entertainment",
    },
    {
      name: "mystery",
      link: "/mystery",
    },
    {
      name: "more",
      link: "/more",
    },
  ];
  return (
    <nav className="border-1px pb-2">
      <div className=" mt-2 px-4 xs:px-0 flex justify-between">
        <ul className="flex">
          <li className="mr-2 mt-1">
            <Link href="/">
              <a className="text-2xl logo">MoonsBlog</a>
            </Link>
          </li>
          {linker.map((data, i) => {
            return (
              <li className="ml-4 mt-2 sm:block hidden" key={i}>
                <Link href={data.link}>
                  <a className="text-mute">
                    {Navbar_lang[data.name][locale.toString()]}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        {cookies.user ? (
          <User locale={locale} data={cookies.user} />
        ) : (
          <ul className="mt-1 flex">
            <li>
              <Link href="/add-new-post">
                <a>
                  <Button border>
                    {Navbar_lang["add_post"][locale.toString()]}
                  </Button>
                </a>
              </Link>
            </li>
            <li className="sm:block hidden">
              <Link href="/sign-in">
                <a>
                  <Button>{Navbar_lang["login"][locale.toString()]}</Button>
                </a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
