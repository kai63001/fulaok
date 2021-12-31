import Image from "next/image";
import Link from "next/link";
const Card = (props: any) => {
  return (
    <Link href={`/read/${props.id}`}>
      <a className="bg-gray-300 rounded-md p-113 cursor-pointer active:translate-y-1 transition duration-200 hover:opacity-70">
        <div
          className={`relative h-full tracking-wider color-white rounded-md transform ease-in-out bg-white hover:text-purple-900`}
        >
          <Image
            className="rounded-tr-md rounded-tl-md max-h-56"
            src={props.image}
            alt={props.children}
            title={props.children}
            width="600px"
            height="320px"
            layout="intrinsic"
            objectFit="cover"
          />
          <div className="p-3">
            <p className="text-lg">{props.children}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
