import React, { useEffect, useState } from "react";
import NavList from "./NavList";
import MobileNavigation from "./DrawerNavigation";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { LuUtensilsCrossed, LuMenu } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [showNavBar, setShowNavbar] = useState(false);
  const [navbarWidth, setNavbarWidth] = useState("translate-x-full");

  // toggle profile
  const [toggleProfile, setToggleProfile] = useState(false);

  // user status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // get user from local strogage
  const user = localStorage.getItem("username");
  const useremail = localStorage.getItem("email");

  useEffect(() => {
    setIsLoggedIn(false);
    if (user && useremail) {
      localStorage.setItem("isLoggedin", true)
      setIsLoggedIn(true);
    }
  }, [user, useremail]);


  // handle logout
  const handleLogout = ()=>{
    if(user && useremail){
      localStorage.removeItem("user")
      localStorage.removeItem("email")
      localStorage.removeItem("isLoggedin")
      setIsLoggedIn(false)
      setToggleProfile(false)
    }
  }
 
  const closeNavbar = () => {
    setNavbarWidth("translate-x-full");
    setTimeout(() => {
      setShowNavbar(false);
    }, 300);
  };
  return (
    <>
      <header className="bg-transparent py-2 ">
        <div className=" mx-auto pt-6 md:pt-8 lg:pt-12 pb-4 flex items-center justify-between ">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <LuUtensilsCrossed className="pb-0.5 w-6 h-6 md:w-7 md:h-7" />
            <Link
              to="/"
              className=" text-xl sm:text-2xl md:text-3xl font-bold "
            >
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

          <div className="flex  items-center space-x-2 md:space-x-4  xl:text-lg ">
            {/* Logged In */}
            {isLoggedIn ? (
              <div className="relative">
                <div className=" flex items-center gap-2 sm:gap-4 ">
                  <FaSearch className="text-neutral-600 cursor-pointer w-5 h-5 md:w-7 md:h-7" />
                  <button onClick={() => setToggleProfile(!toggleProfile)}>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt=""
                      className=" w-6 h-6 md:w-10 md:h-10 object-cover rounded-full cursor-pointer"
                    />
                  </button>
                </div>

                {/* User profile */}

                {toggleProfile && (
                  <div className={`absolute  top-12 z-50 bg-white  right-0 w-40  shadow-md shadow-gray-500 p-4 rounded-md  ${toggleProfile?"translate-x-0":"translate-x-full"} `}>
                    <h1 className="text-base font-semibold">{user}</h1>
                    <h2 className="text-base font-semibold my-2">
                      {useremail}
                    </h2>
                    <Button className={"w-full"} onClick={handleLogout}>
                      <span>Log out</span>
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              // Buttons
              <div className="hidden sm:flex items-center space-x-4">
                <button className=" bg-gray-100 text-gray-800 px-4 py-1.5 rounded-md hover:bg-gray-200">
                  <Link to="/login">Log in</Link>
                </button>
                <Button className="">
                  <Link to="/signup">Sign up</Link>
                </Button>
              </div>
            )}

            {/* toggle Menu */}
            <div className=" lg:hidden flex items-center">
              <button
                onClick={() => {
                  setShowNavbar(!showNavBar);
                  setNavbarWidth("translate-x-0");
                }}
              >
                <LuMenu className=" w-6 h-6 md:w-10 md:h-10" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
