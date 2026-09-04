import React from "react";
import { NavLink } from "react-router";
import { LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <div className="p-5 text-xl bg-zinc-900 flex justify-between items-center ">
      <div>
        <h1>logo</h1>
      </div>
      <div className="flex gap-8">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-semibold" : "text-zinc-400"
          }
          end
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-semibold" : "text-zinc-400"
          }
          to="/home/products"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-cyan-400 font-semibold" : "text-zinc-400"
          }
          to="/home/about"
        >
          About
        </NavLink>
      </div>
      <div>
        <button className="p-1 rounded border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 cursor-pointer ">
          <LogOut size={22} className="text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
