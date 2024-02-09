import { EllipsisIcon } from "../../../icons";

export default function DropDown() {
  return (
    <div className="relative">
      <div
        className="hover:bg-gray-200 h-9 w-9 rounded-full flex items-center justify-center"
        role="button"
      >
        <EllipsisIcon />
      </div>
      <ul className="absolute bg-white shadow-[0_0_10px_rgb(0,0,0,0.2)] p-2 rounded-lg right-0 translate-y-1 w-28 hidden">
        <li
          className="text-sm font-semibold hover:bg-gray-200 p-2 rounded-lg"
          role="button"
        >
          Edit
        </li>
        <li
          className="text-sm font-semibold hover:bg-gray-200 p-2 rounded-lg"
          role="button"
        >
          Delete
        </li>
      </ul>
    </div>
  );
}
