import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const UserProtectedRoute = () => {
  const { loggedIn } = useContext(AuthContext);

  if(loggedIn.role !== "user" || loggedIn.role !== "artist"){
    return <Navigate to="/" replace/>
  }

  return <Outlet />;
};

export default UserProtectedRoute;
