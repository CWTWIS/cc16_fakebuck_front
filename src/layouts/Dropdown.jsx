import { useEffect, useRef, useState } from "react";
import Avatar from "../components/Avatar";
import { RightFromBracketIcon } from "../icons";
import useAuth from "../hook/use-auth";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropDownEl = useRef(null); // {current: null}
  const {
    authUser: { profileImage, firstName, lastName, id },
    logout,
  } = useAuth();

  useEffect(() => {
    if (open) {
      const handleClickOutSide = (e) => {
        if (dropDownEl.current && !dropDownEl.current.contains(e.target))
          setOpen(false);
      };
      document.addEventListener("mouseup", handleClickOutSide);
      return () => document.removeEventListener("mouseup", handleClickOutSide);
    }
  }, [open]);

  return (
    <div className="relative" ref={dropDownEl}>
      {/* dropDown.current = <div className = "relative"></div> */}
      <div role="button" onClick={() => setOpen(!open)}>
        <Avatar src={profileImage} />
      </div>
      {open && (
        <div className="absolute right-0 translate-y-1.5">
          <div className="w-96 bg-white rounded-lg shadow-[0_0_2px_rgb(0,0,0,0.2)] p-2">
            <Link to={`/profile/${id}`}>
              <div
                className="flex gap-2 items-center hover:bg-gray-100 p-2 rounded-lg"
                role="button"
              >
                <Avatar size={3.75} src={profileImage} />
                <div className="flex flex-col">
                  <span className="font-semibold">
                    {firstName} {lastName}
                  </span>
                  <span className="text-sm text-gray-500">
                    See your profile
                  </span>
                </div>
              </div>
            </Link>
            <hr className="my-2 border-gray-300" />
            <div
              className="flex gap-2 items-center hover:bg-gray-100 p-2 rounded-lg"
              role="button"
              onClick={logout}
            >
              <div className="bg-gray-300 w-9 h-9 rounded-full flex items-center justify-center">
                <RightFromBracketIcon />
              </div>
              <span className="font-semibold text-sm">Log out</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
