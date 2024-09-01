import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="max-w-[90%] mx-auto  min-h-screen ">
     
      <Navbar />
      <main>{children}</main>
      <div>footer</div>
    </div>
  );
};

export default Layout;
