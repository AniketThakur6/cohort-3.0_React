import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage";
import MainLayout from "./../layout/MainLayout";
import AboutPage from "../pages/AboutPage";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {


  const [isAdmin, setisAdmin] = useState(false)
console.log(isAdmin)
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <ProtectedRoute isAdmin={isAdmin} />,
      children: [
        {
          path: "",
          element: <MainLayout setisAdmin={setisAdmin} />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/",
      element: <PublicRoute isAdmin={isAdmin} />,
      children: [
        {
          path: "/",
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <LoginPage setisAdmin={setisAdmin} />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
