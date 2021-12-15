interface InputProps {
  name: string,
  type?: string | "text",
  placeholder?: string,
  label: string,
}

const Input = (props:InputProps) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className={`rounded-sm focus:ring-1 focus:outline-none w-full text-black placeholder-gray-500 border border-gray-200 focus:border-purple-500 focus:ring-purple-500 py-1 pl-3`}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
