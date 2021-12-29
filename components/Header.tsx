import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
const Header = (props:any) => {
  const router = useRouter();
  return (
    <NextSeo
      title={
        props.title
          ? `${props.title} | Fula OK`
          : "Fula OK"
      }
      description={
        props.des
          ? props.des
          : "Moonsblog post it"
      }
      canonical={`https://wallss.net${router.asPath}`}
      openGraph={{
        type: "website",
        locale: "en_EN",
        title: props.title
          ? `${props.title} | Fula OK`
          : "Fula OK",
        description: props.des
          ? props.des
          : "Moonsblog post it",
        images: [
          {
            url:
              props.image == undefined || props.image.length == 0
                ? "https://wallss.net/main.jpg"
                : props.image,
          },
        ],
        url: `https://wallss.net${router.asPath}`,
        site_name: "wallss",
      }}
      twitter={{
        handle: "@moonsblog",
        site: "@moonsblog",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Header;