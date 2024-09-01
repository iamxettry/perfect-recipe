import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div>nav</div>
      <main>{children}</main>
      <div>footer</div>
    </div>
  );
};

export default Layout;
