const Card = (props: any) => {
  return (
    <div className="bg-gray-300 rounded-md p-113 cursor-pointer active:translate-y-1 transition duration-200 hover:opacity-70">
      <div
        className={`relative h-full tracking-wider color-white rounded-md transform ease-in-out bg-white hover:text-purple-900`}
      >
        <img className="rounded-tr-md rounded-tl-md" src={props.image} alt="" />
        <div className="p-3">
          <p className="text-lg">{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
