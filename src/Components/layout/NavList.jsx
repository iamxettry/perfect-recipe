import React from "react";
import { Navlinks } from "../../constants/Navlinks";
import { Link, useLocation } from "react-router-dom";

const NavList = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <nav className="hidden lg:flex space-x-6 text-lg xl:text-xl">
      {Navlinks.map((item, index) => {
        let isActive = pathname === item.url;
        return (
          <Link 
            to={item.url}
            key={index}
            className={`cursor-pointer  text-neutral-800 font-bold hover:text-neutral-900 `}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavList;
