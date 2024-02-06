import { useState } from "react";
import Avatar from "../components/Avatar";
import { RightFromBracketIcon } from "../icons";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div role="button" onClick={() => setOpen(!open)}>
        <Avatar />
      </div>
      {open && (
        <div className="absolute right-0 translate-y-1.5">
          <div className="w-96 bg-white rounded-lg shadow-[0_0_2px_rgb(0,0,0,0.2)] p-2">
            <div
              className="flex gap-2 items-center hover:bg-gray-100 p-2 rounded-lg"
              role="button"
            >
              <Avatar size={3.75} />
              <div className="flex flex-col">
                <span className="font-semibold">Jack Nicolus</span>
                <span className="text-sm text-gray-500">See your profile</span>
              </div>
            </div>
            <hr className="my-2 border-gray-300" />
            <div
              className="flex gap-2 items-center hover:bg-gray-100 p-2 rounded-lg"
              role="button"
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
