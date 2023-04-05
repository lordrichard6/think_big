import { Link } from "react-router-dom";

import { navItems } from "./Navbar";

export default function SidebarComponent({ isOpen, toggle }) {
  return (
    <div
      onClick={toggle}
      className={`fixed top-0 bg-primary-color h-[300px] z-50 rounded-br-md ease-in-out duration-300 ${
        isOpen ? "w-3/5" : "w-0"
      }`}
    >
      <div className="w-full relative flex flex-col justify-center items-center">
        <img className="w-[195px] mt-4" src="/logo.png" alt="think big logo" />
        <ul className="nav-items uppercase w-1/2 mt-4 justify-between items-center ease-in-out duration-600">
          {navItems.map((item, i) => {
            return (
              <li onClick={toggle} className={`cursor-pointer my-4 ${
                isOpen ? "flex" : "hidden"
              }`} key={i}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
