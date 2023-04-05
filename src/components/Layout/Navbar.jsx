import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaRegLightbulb } from "react-icons/fa";
import { TbBulbFilled } from "react-icons/tb";

export const navItems = [
  { name: "home", link: "/" },
  { name: "about", link: "/about" },
  { name: "login/signin", link: "/signin" },
  { name: "contact", link: "/contact" },
];

export default function NavbarComponent({ toggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 500;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav
      id="navbar"
      className={`${
        scrolled ? "scrolled" : ""
      } w-full flex justify-center absolute px-8 py-2 z-20`}
    >
      <div className="w-full relative flex justify-between h-14 lg:w-[1000px]">
        <img className="h-full flex z-50" src="/logo.png" alt="think big logo" />
        <ul className="nav-items hidden uppercase w-1/2 md:flex justify-between items-center ease-in-out duration-300">
          {navItems.map((item, i) => {
            return (
              <li className="cursor-pointer text-lg" key={i}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
        <div
          onClick={toggle}
          className="flex relative justify-center items-center md:hidden text-4xl z-50"
        >
          <div onClick={handleClick}>
            {clicked ? <TbBulbFilled /> : <FaRegLightbulb />}
          </div>
        </div>
      </div>
    </nav>
  );
}
