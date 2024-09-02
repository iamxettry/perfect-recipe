import React from "react";
import NavList from "./NavList";
import MobileNavigation from "./DrawerNavigation";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import {  LuUtensilsCrossed, LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [showNavBar, setShowNavbar] = React.useState(false);
  const [navbarWidth, setNavbarWidth] = React.useState("translate-x-full");
  
  const closeNavbar = () => {
    setNavbarWidth("translate-x-full");
    setTimeout(() => {
      setShowNavbar(false);
    }, 300);
  };
  return (
    <>
      <header className="bg-transparent py-2">
        <div className=" mx-auto pt-6 md:pt-8 lg:pt-12 pb-4 flex items-center justify-between ">
          <div className="flex items-center gap-1">
            <LuUtensilsCrossed className="pb-0.5 w-6 h-6 md:w-7 md:h-7" />
            <Link to="/" className=" text-xl sm:text-2xl md:text-3xl font-bold ">
              <span className="text-black">Perfect</span>
              <span className="text-red-500">Recipe</span>
            </Link>
          </div>

          {/* Navbar items */}
          <NavList />

          {/* navigation bar for mobile view */}
          <MobileNavigation
            showNavBar={showNavBar}
            navbarWidth={navbarWidth}
            closeNavbar={closeNavbar}
          />
          <div className="flex items-center space-x-4  xl:text-lg ">
            <div className="hidden sm:flex items-center space-x-4">
              
              <button className=" bg-gray-100 text-gray-800 px-4 py-1.5 rounded-md hover:bg-gray-200">
                <Link to="/login">Log in</Link>
              </button>
              <Button className="">
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
            <div className=" lg:hidden">
              <button
                onClick={() => {
                  setShowNavbar(!showNavBar);
                  setNavbarWidth("translate-x-0");
                }}
              >
                <LuMenu className=" w-8 h-8 sm:w-10 sm:h-10" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
