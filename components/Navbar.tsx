import { useRouter } from "next/router";
import { Navbar_lang } from "@/lang/Navbar.lang";
import Link from "next/link";

const Navbar = (props: any) => {
  const { locale = "en" } = useRouter();

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
    <nav className="">
      <div className="max-w-screen-lg mx-auto mt-3 px-2 xs:px-0 flex justify-between">
        <ul className="flex">
          <li className="mr-2">
            <Link href="/">
              <a className="text-2xl logo">MOONSBLOG</a>
            </Link>
          </li>
          {linker.map((data, i) => {
            return (
              <li className="ml-4 mt-1" key={i}>
                <Link href={data.link}>
                  <a>{Navbar_lang[data.name][locale.toString()]}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="mt-1 flex">
        <li>
            <Link href="/add-new-post">
              <a className="border-red-600 border-2 text-red-600 px-3 py-1 rounded-sm mr-2">{Navbar_lang["add_post"][locale.toString()]}</a>
            </Link>
          </li>
          <li>
            <Link href="/sign-in">
              <a className="bg-red-600 border-red-600 border-2 text-white px-3 py-1 rounded-sm">{Navbar_lang["login"][locale.toString()]}</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
