interface InputProps {
  name: string;
  type?: string | "text";
  placeholder?: string;
  label: string;
}

const Input = (props: InputProps) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className={`rounded-sm w-full text-input placeholder-gray-500 border border-gray-200 focus:outline-purple-500 py-1 pl-3 bg-input`}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
