import { Link } from "react-router-dom";
import Avatar from "../../../components/Avatar";
import { useState } from "react";
import Modal from "../../../components/Modal";
import useAuth from "../../../hook/use-auth";
import PostForm from "./PostForm";

export default function CreatePostContainer() {
  const [open, setOpen] = useState(false);
  const {
    authUser: { id, profileImage, firstName },
  } = useAuth();
  return (
    <div className="flex gap-2 bg-white px-4 py-3 rounded-lg">
      <Link to={`/profile/${id}`} className="shrink-0">
        <Avatar src={profileImage} />
      </Link>
      <button
        className="bg-gray-200 hover:bg-gray-300 rounded-full w-full text-left px-2.5 py-1.5 text-gray-500"
        onClick={() => setOpen(true)}
      >
        What&rsquo;s on your mind, {firstName}?
      </button>
      {open && (
        <Modal title="Create post" onClose={() => setOpen(false)} width={32}>
          <PostForm></PostForm>
        </Modal>
      )}
    </div>
  );
}
