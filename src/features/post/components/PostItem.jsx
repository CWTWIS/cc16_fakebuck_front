import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import DropDown from "./Dropdown";
import PostResponse from "./PostResponse";
import formatTimeAgo from "../../../utils/time-ago";
export default function PostItem({ post }) {
  const {
    createdAt,
    title,
    image,
    userId,
    user: { profileImage, firstName, lastName },
  } = post;
  return (
    <div className="bg-white rounded-lg px-4 pt-3 shadow">
      <div className="flex items-center">
        <div className="flex-1 flex gap-2 items-center">
          <div>
            <Link to={`/profile/${userId}`}>
              <Avatar src={profileImage} />
            </Link>
          </div>
          <div>
            <Link
              to={`/profile/${userId}`}
              className="text-sm font-medium hover:underline"
            >
              {firstName} {lastName}
            </Link>
            <small className="block text-xs text-gray-500">
              {formatTimeAgo(createdAt)}
            </small>
          </div>
        </div>
        <div className="">
          <DropDown />
        </div>
      </div>

      <div className="mt-2">
        {title && <span className="text-sm">{title}</span>}
        <div className="-mx-4 mt-3 flex justify-center bg-gray-300">
          {image && <img src={image} alt="post" />}
        </div>
      </div>

      <div>
        <PostResponse post={post} />
      </div>
    </div>
  );
}
