import React from "react";

import img from "../../assets/img.jpg";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="title">Budget App</h1>
      <img className="img" src={img} alt="" />
    </nav>
  );
};

export default Navbar;
