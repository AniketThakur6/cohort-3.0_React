import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayouts from "../layouts/AuthLayouts";
import LoginPage from "../pages/LoginPage";
import PublicRoutes from "./PublicRoutes";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";
import MainLayouts from "../layouts/MainLayouts";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice";
import ProductsPage from './../pages/ProductsPage';
import AboutPage from './../pages/AboutPage';

const AppRoutes = () => {

  const dispatch = useDispatch();

  const hydrateUser = () => {
    let loggedInUser = JSON.parse(localStorage.getItem("curr_user"))

    if(!loggedInUser){
      return ;
    }

    dispatch(addUser(loggedInUser));
  }

  useEffect(()=>{
    hydrateUser();
  },[])
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          path: "",
          element: <AuthLayouts />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path:"register",
              element:<RegisterPage />
            },
          ],
        },
      ],
    },
    {
      path:'/home',
      element:<ProtectedRoutes />,
      children:[
        {
          path:"",
          element:<MainLayouts />,
          children:[
            {
              path:"",
              element:<HomePage />
            },
            {
              path:"products",
              element:<ProductsPage />
            },
            {
              path:"about",
              element:<AboutPage />
            }
          ]
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
