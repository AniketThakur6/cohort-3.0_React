import React from "react";
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center rounded-lg text-2xl p-5 bg-cyan-700">
      <h1>logo</h1>
      <div className="flex gap-10 font-semibold">
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/about'} >About</NavLink>
        <NavLink to={'/contact'} >Contact</NavLink>
      </div>
      <button className="py-1 px-3 text-xl rounded-lg bg-blue-700">Login</button>
    </div>
  );
};

export default Navbar;
