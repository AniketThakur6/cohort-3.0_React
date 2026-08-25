import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex p-5 rounded-lg justify-between items-center bg-cyan-700 text-xl">
      <h3>logo</h3>
      <div className="flex items-center gap-6">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
