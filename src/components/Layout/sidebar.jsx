import { Link } from "react-router-dom";

import { TbBulbFilled } from "react-icons/tb";
import { navItems } from "./Navbar";

export default function SidebarComponent({ isOpen, toggle }) {
  return (
    <div
      onClick={toggle}
      className={`fixed top-0 right-0 bg-primary-color h-full z-50 rounded-br-md ease-in-out duration-300 ${
        isOpen ? "w-2/3 opacity-100" : "w-0 opacity-0"
      }`}
    >
      <div className="w-full relative flex flex-col justify-center items-center">
        <div className="flex justify-center items-center px-8 pt-2">
          <img
            className="h-10 mr-4"
            src="/logo.png"
            alt="think big logo"
          />
          <TbBulbFilled className="md:hidden text-4xl" />
        </div>
        <ul className="nav-items uppercase w-1/2 mt-4 justify-between items-center ease-in-out duration-600">
          {navItems.map((item, i) => {
            return (
              <li
                onClick={toggle}
                className={`cursor-pointer my-4 ${isOpen ? "flex" : "hidden"}`}
                key={i}
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
