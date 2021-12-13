import { useRouter } from "next/router";

const Navbar = (props: any) => {
  const { locale = "en" } = useRouter();
  const data: any = {
    test: { en: "test", th: "ทดสอบ" },
  };

  console.log(locale);
  return <nav>{data["test"][locale.toString()]}</nav>;
};

export default Navbar;
