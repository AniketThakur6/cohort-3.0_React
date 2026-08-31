import React from "react";
import { useNavigate } from "react-router";
import Login from "./../../../state-uplift/src/components/Login";

const LoginPage = ({ setisAdmin }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 w-100 p-20">
      <h1>Login</h1>

      <button className="p-2 bg-green-700" onClick={() => navigate("/home")}>
        Home
      </button>
      <button className="p-2 bg-blue-700" onClick={() => navigate("/register")}>
        register page
      </button>

      <button
        className="p-2 bg-green-700"
        onClick={() => {
          setisAdmin(prev => !prev)
          navigate("/home");
        }}
      >
        Login into website
      </button>
    </div>
  );
};

export default LoginPage;
