import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex p-5 justify-center items-center gap-10 border-b-2 border-zinc-700">
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/about" >About</NavLink>
      <NavLink to="/contact" >Contact</NavLink>
    </div>
  );
};

export default Navbar;
