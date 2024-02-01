export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    // <div className="m-16">
    <input
      type={type}
      className="w-full focus:outline-none px-3 py-1.5 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    ></input>
    // </div>
  );
}
