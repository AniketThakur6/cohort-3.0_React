import React from "react";

const Navbar = ({setToggle,setIsEdit}) => {

  return (
    <div className="flex items-center h-20 rounded-lg text-xl justify-between py-3 px-5 bg-zinc-900">
      <div>
        <img
          className="h-10 rounded-full object-cover"
          src="/profile.png"
          alt=""
        />
      </div>
      <div className="flex gap-7 font-bold">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
      <div>
        <button onClick={()=>{
          setToggle(prev => !prev)
          setIsEdit(null)
        }} className="py-2 px-6 rounded-xl bg-blue-700">Create +</button>
      </div>
    </div>
  );
};

export default Navbar;
