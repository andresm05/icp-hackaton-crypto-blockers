import React from "react";
import Navbar from "../components/Navbar/Navbar";

const LayoutNavbar = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default LayoutNavbar;
