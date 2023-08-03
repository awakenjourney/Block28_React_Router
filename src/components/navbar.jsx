import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div id="navbar">
          <Link to="/home">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
    </>
  );
};

export default NavBar;
