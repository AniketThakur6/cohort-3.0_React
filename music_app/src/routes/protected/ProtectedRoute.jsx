import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = () => {
  
  const {loggedIn}= useContext(AuthContext);

  if(!loggedIn){
    return <Navigate to='/' replace/>
  }

  return <Outlet />;
};

export default ProtectedRoute;
