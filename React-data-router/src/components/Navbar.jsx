import React from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = ({ setisAdmin }) => {

  const navigate = useNavigate();

  return (
    <div className="h-full p-5 flex grow flex-col justify-between border-r-2 border-zinc-500">
      <div>
        <h1>logo</h1>
        <div className="mt-10 flex flex-col gap-5 text-2xl p-5">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-cyan-200 font-semibold" : "text-white"
            }
            end
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-cyan-200 font-semibold" : "text-white"
            }
            to="/home/about"
          >
            About
          </NavLink>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <button
          className="py-1 hover:bg-green-600 bg-blue-700 px-4 text-xl ml-5 mb-5"
          onClick={() => navigate('/login')}
        >
          Login page
        </button>

        <button
          className="py-1 hover:bg-zinc-600 bg-red-700 px-4 text-xl ml-5 mb-5"
          onClick={() => setisAdmin((prev) => !prev)}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
