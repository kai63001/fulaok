const Card = (props: any) => {
  return (
    <div className="relative cursor-pointer">
      <div className="absolute inset-x-0 bottom-0 bg-gray-300 border border-gray-300 rounded-lg h-3" />
      <div
        className={`relative h-full bottom-1 tracking-wider color-white border-2 border-gray-200 rounded-md transform hover:translate-y-1 transition duration-200 ease-in-out bg-white hover:text-purple-900`}
      >
        <img
          className="rounded-tr-md rounded-tl-md"
          src="https://petmaya.com/wp-content/uploads/2021/12/architecture.jpg"
          alt=""
        />
        <div className="p-3"><p className="text-lg">{props.children}</p></div>

      </div>
    </div>
  );
};

export default Card;
