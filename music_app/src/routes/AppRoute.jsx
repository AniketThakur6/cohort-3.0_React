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
import UserProtectedRoute from "./protected/UserProtectedRoute";
import ArtistProtectedRoute from "./protected/ArtistProtectedRoute";
import UploadSongPage from "./../pages/UploadSongPage";
import MySongPage from "./../pages/MySongPage";
import LibraryPage from "./../pages/LibraryPage";
import FavoritesPage from "./../pages/FavoritesPage";

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
          element: <MainLayout />,
          children: [
            {
              element: <UserProtectedRoute />,
              children: [
                {
                  index: true,
                  element: <HomePage />,
                },
                {
                  path: "library",
                  element: <LibraryPage />,
                },
                {
                  path: "favorites",
                  element: <FavoritesPage />,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "/artist-dashboard",
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              element: <ArtistProtectedRoute />,
              children: [
                {
                  index: true,
                  element: <ArtistDashBoard />,
                },
                {
                  path: "upload",
                  element: <UploadSongPage />,
                },
                {
                  path: "my-songs",
                  element: <MySongPage />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
