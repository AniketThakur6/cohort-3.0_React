import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate()
  const { logoutUser } = useContext(Auth);

  return (
    <div className="flex flex-col text-whi p-5 h-full border-r-2 border-zinc-600 justify-between">
      <div className="flex flex-col p-2 gap-5">
        <div className="text-3xl">E-Comm</div>
        <div className="mt-5 text-xl gap-5 flex flex-col h-full">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-700 border-b border-green-700"
                : "text-zinc-300 border-b border-gray-500"
            }
            to="/home"
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-700 border-b border-green-700"
                : "text-zinc-300 border-b border-gray-500"
            }
            to="/home/products"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-700 border-b border-green-700"
                : "text-zinc-300 border-b border-gray-500"
            }
            to="/home/users"
          >
            Users
          </NavLink>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            logoutUser();
            navigate("/",{replace:true});
          }}
          className="py-1 px-6 text-lg bg-red-800 rounded cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
