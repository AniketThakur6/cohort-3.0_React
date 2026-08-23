import React, { useContext } from "react";
import { MyStore } from "../context/MyShop";

const Navbar = () => {

  let { setToggle,toggle } = useContext(MyStore)

  return (
    <div className="flex justify-between bg-zinc-900 items-center p-3 rounded-lg">
      <div className="p-1 rounded-full border-2 border-zinc-700">
        <img
          className="h-10 w-10 object-fit rounded-full"
          src="/profile.png"
          alt=""
        />
      </div>
      <div className="flex w-30 items-center justify-between">
        <button
          onClick={() => {
            setToggle(true);
          }}
          className={`font-semibold text-xl ${toggle?"text-blue-700 font-semibold ":"text-white"}`}
        >
          Home
        </button>
        <button
          onClick={() => {
            setToggle(false);
          }}
          className={`font-semibold text-xl ${toggle?`text-white`:`text-blue-700`}`}
        >
          Cart
        </button>
      </div>
      <div>
        <button className="py-2 px-5 rounded-sm text-xl bg-blue-700">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
