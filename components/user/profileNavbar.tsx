import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar_lang } from "@/lang/components/Navbar.lang";
import Image from "next/image"

const profileNavbar = (props: any) => {
  const { locale = "en" } = useRouter();

  return (
    <ul className="flex -top-1">
      <li className="group">
        <div className="flex relative cursor-pointer hover:opacity-70 group">
          <div className="bg-purple-600 relative left-6 p-1px h-39 rounded-full z-10">
            <Image
              src={props.data.photoURL}
              className="rounded-full bg-white "
              width="35px"
              height="35px"
              alt=""
            />
          </div>
          <div className="bg-gray-300 relative p-113 rounded-full h-full top-0.5">
            <div className="bg-white pl-8 rounded-full text-mute pr-2 py-1 flex text-main font-medium">
              {props.data.displayName}{" "}
              <svg
                viewBox="0 0 24 24"
                color="text"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="group-hover:block absolute hidden h-auto z-50 right-5 pt-2">
          <ul className=" w-64 bg-white border rounded-lg">
            <li className="py-1">
              <Link href="/add-new-post">
                <a className="block text-mute hover:bg-gray-100 pl-5 py-2 cursor-pointer">
                  {Navbar_lang["add_post"][locale]}
                </a>
              </Link>
            </li>
            <div className="border-1px "></div>
            <li className="py-1">
              <Link href="/logout">
                <a className="block text-mute hover:bg-gray-100 pl-5 py-2 cursor-pointer">
                  {Navbar_lang["logout"][locale]}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default profileNavbar;
