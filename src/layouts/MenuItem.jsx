import { Link } from "react-router-dom";
export default function MenuItem({ Icon, active, to }) {
  return (
    <Link
      to={to}
      className={`${active ? "" : "hover:bg-gray-300"} py-2 px-12 rounded-lg`}
    >
      <Icon to={to} className={active ? "fill-blue-500" : "fill-gray-600"} />
    </Link>
  );
}
