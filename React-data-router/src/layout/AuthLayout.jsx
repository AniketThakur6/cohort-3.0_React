import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="w-full text-white h-screen bg-black">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
