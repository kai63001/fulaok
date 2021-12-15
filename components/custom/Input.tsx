const Input = () => {
  return (
    <div>
      <label htmlFor="cheese">Do you like cheese?</label>
      <input
        type="text"
        name="cheese"
        id="cheese"
        className={`rounded-sm focus:ring-1 focus:outline-none w-full text-black placeholder-gray-500 border border-gray-200 focus:border-purple-500 focus:ring-purple-500 py-1 pl-3`}
        placeholder="underwood@moonsblog.com"
      />
    </div>
  );
};

export default Input;
