import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProtectedRoute from "../routes/ProtectedRoute"
import { AuthLayout } from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PublicRoute from "./PublicRoute";
import UserPage from './../pages/UserPage';
import ProductPage from './../pages/ProductPage';
import HomePage from "../pages/HomePage"
import MainLayout from './../layout/MainLayout';

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
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
      children: [{
        path:"",
        element:<MainLayout />,
        children: [
          {
            path:"",
            element:<HomePage />
          },
          {
            path:'products',
            element:<ProductPage />
          },
          {
            path:"users",
            element:<UserPage />
          }
        ]
      }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
