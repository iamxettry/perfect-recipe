import React from "react";
import { Navlinks } from "../../constants/Navlinks";
import { useLocation } from "react-router-dom";

const NavList = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [showNavBar, setShowNavbar] = React.useState(false);
  const [navbarWidth, setNavbarWidth] = React.useState("translate-x-full");
  return (
    <nav className="hidden lg:flex space-x-6 text-lg xl:text-xl">
      {Navlinks.map((item, index) => {
        let isActive = pathname === item.url;
        return (
          <a
            href={item.url}
            key={index}
            className={`cursor-pointer  text-neutral-800 font-bold hover:text-neutral-900 `}
          >
            {item.name}
          </a>
        );
      })}
    </nav>
  );
};

export default NavList;
