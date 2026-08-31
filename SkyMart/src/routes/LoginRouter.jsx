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
            className="fixed bottom-4 right-4 z-50 max-w-[calc(100vw-2rem)] border border-[#292929] bg-[#181818] sm:bottom-8 sm:right-12
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
