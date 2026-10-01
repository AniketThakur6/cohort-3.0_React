import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicLayout from "../layouts/PublicLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PublicRoute from "./protected/PublicRoute";
import ProtectedRoute from "./protected/ProtectedRoute";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ArtistDashBoard from "../pages/ArtistDashBoard";

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <PublicLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path:"artist-dashboard",
              element: <ArtistDashBoard />
            }
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
