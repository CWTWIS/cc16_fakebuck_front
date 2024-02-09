import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import DropDown from "./Dropdown";
import PostResponse from "./PostResponse";
export default function PostItem() {
  return (
    <div className="bg-white rounded-lg px-4 pt-3 shadow">
      <div className="flex items-center">
        <div className="flex-1 flex gap-2 items-center">
          <div>
            <Link to="/">
              <Avatar />
            </Link>
          </div>
          <div>
            <Link className="text-sm font-medium hover:underline">
              John Doe
            </Link>
            <small className="block text-xs text-gray-500">1h</small>
          </div>
        </div>
        <div className="">
          <DropDown />
        </div>
      </div>

      <div className="mt-2">
        <span className="text-sm">Post title</span>
        <div className="-mx-4 mt-3">
          <img
            src="https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1"
            alt="post"
          />
        </div>
      </div>

      <div>
        <PostResponse />
      </div>
    </div>
  );
}
