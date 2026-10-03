import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const ArtistProtectedRoute = () => {
  const { loggedIn } = useContext(AuthContext);

  if (loggedIn.role == "artist") {
    return <Outlet />;
  }

  <Navigate to="/" replace />;
};

export default ArtistProtectedRoute;
