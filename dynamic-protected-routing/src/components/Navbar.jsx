import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center rounded-lg text-2xl p-5 bg-cyan-700">
      <h1>logo</h1>
      <div className="flex gap-10 font-semibold">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-green-600" : "text-gray-400"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-green-600" : "text-gray-400"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-green-600" : "text-gray-400"
          }
        >
          Contact
        </NavLink>
      </div>
      <button className="py-1 px-3 text-xl rounded-lg bg-blue-700">
        Login
      </button>
    </div>
  );
};

export default Navbar;
