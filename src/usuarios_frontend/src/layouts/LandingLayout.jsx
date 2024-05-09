import React from "react";
import Navbar from "./Navbar/Navbar";

const LnadingLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default LnadingLayout;
