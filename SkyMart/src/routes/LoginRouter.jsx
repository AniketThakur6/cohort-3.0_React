import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import LoginPage from "../pages/LoginPage";
import App from "./../App";
import SignupPage from "./../pages/SignupPage";
import ProtectedRoutes,{ GuestRoute } from "./ProtectedRoutes";
import { MyContext } from "../context/MyContext";

const LoginRouter = () => {
  const { currentUser, showMessage, message } = useContext(MyContext);

  return (
    <div className="min-h-screen w-full realtive">
      <Routes>
        <Route
          path="/login"
          element={
            <GuestRoute>
              <LoginPage />
            </GuestRoute>
          }
        />
        <Route
          path="/register"
          element={
            <GuestRoute>
              <SignupPage />
            </GuestRoute>
          }
        />
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <App />
            </ProtectedRoutes>
          }
        />
      </Routes>

      {showMessage && (
        <div
          className="fixed w-fit bottom-8 right-12 z-50 bg-[#181818] border border-[#292929] 
                  rounded-xl px-4 py-3 text-white flex items-center gap-2"
        >
          <span
            className="w-5 h-5 rounded-full bg-main-color text-black 
                     flex items-center justify-center"
          >
            ✓
          </span>

          {message}
        </div>
      )}
    </div>
  );
};

export default LoginRouter;
