import { LuXCircle } from "react-icons/lu";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navlinks } from "../../constants/Navlinks";
import Button from "../common/Button";
const DrwerNavigarion = ({ showNavBar, closeNavbar, navbarWidth }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div
      className={`bg-black/30 backdrop-blur-[2px] h-[100vh] w-[100vw] fixed top-0 left-0 z-[9999] flex justify-end overflow-hidden lg:hidden ${
        showNavBar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={closeNavbar} 
    >
      <div
        className={`h-full bg-white w-4/5 md:w-1/2 ${navbarWidth} duration-300 relative`}
        onClick={(e) => e.stopPropagation()} 
      >
        <button onClick={closeNavbar} className="absolute left-4 top-4">
          <LuXCircle className="text-primary-black w-10 h-10 hover:text-primary-button" />
        </button>

        <ul className="flex flex-col gap-8 pt-20">
          {Navlinks.map((route, index) => (
            <div key={index}>
              <li
                className={`font-medium font-lexend text-base text-center pb-7 ${
                  pathname === route.url ? "text-red-600" : "text-black"
                } hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer`}
                onClick={closeNavbar} 
              >
                <Link to={route.url}>{route.name}</Link>
              </li>
            </div>
          ))}
        </ul>

        <div className="  w-full  flex justify-center  sm:hidden items-center space-x-4">
                <button className=" bg-gray-100 text-gray-800 px-4 py-1.5 rounded-md hover:bg-gray-200">
                  <Link to="/login">Log in</Link>
                </button>
                <Button className="">
                  <Link to="/signup">Sign up</Link>
                </Button>
              </div>
      </div>
    </div>
  );
};

export default DrwerNavigarion;
