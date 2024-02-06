import { useLocation } from "react-router-dom";
import { HouseIcon, UserGroupIcon } from "../icons";
import MenuItem from "./MenuItem";

const menuList = [
  {
    id: 1,
    Icon: HouseIcon,
    to: "/",
  },
  {
    id: 2,
    Icon: UserGroupIcon,
    to: "/friend",
  },
];
export default function Menu() {
  const { pathname } = useLocation();

  return (
    <nav className="flex gap-2 justify-center py-1.5">
      {menuList.map((el) => (
        <MenuItem
          key={el.id}
          Icon={el.Icon}
          to={el.to}
          active={pathname === el.to}
        />
      ))}
    </nav>
  );
}
