import React from "react";
import { Navigate, Outlet } from "react-router";

const PublicRoute = ({isAdmin}) => {

  if(isAdmin){
    return <Navigate to="/home" replace />
  }

  return <Outlet />
};

export default PublicRoute;
