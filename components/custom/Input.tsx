const Input = () => {
  return (
    <input
      type="text"
      className={`rounded-sm focus:ring-1 focus:outline-none w-full text-black placeholder-gray-500 border border-gray-200 focus:border-red-500 focus:ring-red-500 py-1 pl-3`}
      placeholder="underwood@moonsblog.com"
    />
  );
};

export default Input;
