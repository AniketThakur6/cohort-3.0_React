import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicProtected = () => {
  const { isAuthenticated, isLoading } = useSelector((store) => store.auth);

  if (isLoading) {
    return (
      <h1 className="bg-black text-5xl h-screen w-full text-white">
        loading state...
      </h1>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

export default PublicProtected;
