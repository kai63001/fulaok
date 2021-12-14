const Button = (props: any) => {
  return (
    <button className="relative ml-3">
      <div className="absolute inset-x-0 bottom-0 bg-purple-600 border border-purple-600 rounded-lg h-3" />
      <div
        className={`relative bottom-1  tracking-wider px-3 py-1 color-white border-2 border-purple-500 rounded-md transform active:translate-y-1 transition duration-200 ease-in-out ${props.border ? 'bg-white text-purple-500' : 'bg-purple-500 text-white'}`}
      >
        {props.children}
      </div>
    </button>
  );
};

export default Button;
