import { useContext } from "react";
import { NavLink } from "react-router";
import { MyContext } from "../context/MyContext";
import { LogOut, Zap } from "lucide-react";

const Navbar = () => {
  const { cartItems, setToggleCart, currentUser, logoutUser } =
    useContext(MyContext);

  return (
    <nav className="sticky z-20 top-0 backdrop-blur-sm bg-[#000000cc] h-20 border border-[#292929] px-36 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-main-color flex items-center justify-center text-black font-bold">
          <Zap
            size={23}
            color=""
            strokeWidth={1}
            absoluteStrokeWidth
            fill="text-black"
          />
        </div>

        <span className="text-xl font-bold text-white">
          Sky<span className="text-main-color">Mart</span>
        </span>
      </div>

      {/* Navigation */}
      <div className="flex items-center text-xl gap-7">
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            isActive
              ? "text-main-color font-semibold"
              : "text-gray-500 font-semibold"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive
              ? "text-main-color font-semibold"
              : "text-gray-500 font-semibold"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "text-main-color font-semibold"
              : "text-gray-500 font-semibold"
          }
        >
          About
        </NavLink>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* User */}
        <div className="h-11 px-2 rounded-xl bg-zinc-800 border border-[#292929] flex items-center justify-between gap-2">
          <div className="w-7 h-7 capitalize rounded-md bg-main-color text-black flex items-center justify-center font-bold text-sm">
            {currentUser.avatar}
          </div>

          <span className="text-gray-300 text-lg">{ currentUser.name?.charAt(0).toUpperCase() + currentUser.name?.slice(1) }</span>
        </div>

        {/* Cart */}
        <button
          onClick={() => setToggleCart((prev) => !prev)}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#292929] text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>

          {/* Cart count */}
          {cartItems.length ? (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-main-color px-1 text-xs font-bold text-black">
              {cartItems.reduce((total, elem) => total + elem.quantity, 0)}
            </span>
          ) : (
            ""
          )}
        </button>

        {/* Logout */}
        <button onClick={logoutUser} className="w-10 h-10 rounded-xl border border-[#292929] text-gray-300 flex items-center justify-center hover:bg-[#bb3a3a34]
        hover:text-[#ec2a2ac7] hover:border-[#ec2a2ac7] transition duration-300 ease-in-out">
          <LogOut size={20} className="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
