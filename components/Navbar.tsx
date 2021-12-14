import { useRouter } from "next/router";
import { Navbar_lang } from "@/lang/components/Navbar.lang";
import Link from "next/link";
import Button from "@/components/custom/Button";

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
    <nav className="border-b-2 pb-2">
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
        <ul className="mt-1 flex">
          <li>
            <Link href="/add-new-post">
              <a>
                <Button>{Navbar_lang["add_post"][locale.toString()]}</Button>
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
      </div>
    </nav>
  );
};

export default Navbar;
