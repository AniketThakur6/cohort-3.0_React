import { useContext, useState } from "react";
import { NavLink } from "react-router";
import { MyContext } from "../context/MyContext";
import { LogOut, Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const { cartItems, setToggleCart, currentUser, logoutUser } =
    useContext(MyContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-20 border-b border-[#292929] bg-[#090909ee] backdrop-blur-sm">
      <div className="relative mx-auto flex min-h-16 max-w-319 items-center justify-between px-4 py-2 sm:px-6 lg:h-16 lg:px-0">
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
      <div className="hidden items-center justify-center gap-7 text-lg lg:flex">
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
      <div className="flex items-center gap-2 sm:gap-3">
        {/* User */}
        <div className="hidden h-10 items-center justify-between gap-2 rounded-xl border border-[#292929] bg-zinc-900 px-2 min-[400px]:flex">
          <div className="w-7 h-7 capitalize rounded-md bg-main-color text-black flex items-center justify-center font-bold text-sm">
            {currentUser.avatar}
          </div>

          <span className="pr-1 text-sm font-medium text-gray-300">{ currentUser.name?.charAt(0).toUpperCase() + currentUser.name?.slice(1) }</span>
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

        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#292929] text-gray-300 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="absolute left-4 right-4 top-[calc(100%+0.35rem)] flex flex-col rounded-2xl border border-[#292929] bg-[#111111] p-2 shadow-2xl lg:hidden">
          <div className="mx-2 mb-2 flex h-10 items-center gap-2 rounded-xl border border-[#292929] bg-zinc-900 px-2 min-[400px]:hidden">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-main-color text-sm font-bold text-black">
              {currentUser.avatar}
            </div>
            <span className="text-sm font-medium text-gray-300">
              {currentUser.name?.charAt(0).toUpperCase() + currentUser.name?.slice(1)}
            </span>
          </div>
          {[
            ["/home", "Home"],
            ["/products", "Shop"],
            ["/about", "About"],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `rounded-xl px-4 py-3 text-base font-semibold ${isActive ? "bg-lime-950/50 text-main-color" : "text-gray-400 hover:bg-zinc-800 hover:text-white"}`}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
