const defaultClasses =
  "w-full focus:outline-none px-3 py-1.5 border  rounded-md  focus:ring-2 ";

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  errorMessage,
}) {
  const extendedClasses = errorMessage
    ? "border-red-500 focus:ring-red-500"
    : " border-gray-300 focus:border-blue-500 focus:ring-blue-300";
  return (
    // <div className="m-16">
    <>
      <input
        type={type}
        className={`${defaultClasses} ${extendedClasses}`}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      ></input>
      {errorMessage ? (
        <small className="text-red-500">{errorMessage}</small>
      ) : null}
    </>
    // </div>
  );
}
