const Button = (props: any) => {
  return (
    <button className="relative ml-3">
      <div className="absolute inset-x-0 bottom-0 bg-purple-800 border border-purple-800 rounded-lg h-3" />
      <div className="relative bottom-1 text-white tracking-wider px-3 py-1 color-white border-2 border-purple-500 bg-purple-500 rounded-md transform active:translate-y-1 transition duration-200 ease-in-out">
        {props.children}
      </div>
    </button>
  );
};

export default Button;
