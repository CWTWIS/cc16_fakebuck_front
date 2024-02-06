import { Link } from "react-router-dom";
import { FacebookIcon } from "../icons/index";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="grid grid-cols-3 bg-white shadow">
      <div className="justify-self-start">
        <Link to="/">
          <FacebookIcon />
        </Link>
      </div>
      <div>
        <Menu />
      </div>
      <div className="">Dropdown</div>
    </header>
  );
}
