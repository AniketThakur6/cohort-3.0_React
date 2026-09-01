import { useContext } from "react";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { useForm } from "react-hook-form";

export const useAuth = () => {
  const navigate = useNavigate();

  const { logininUser, registerUser } = useContext(Auth);

  const {
    register,
    reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const loginFormSubmit = (data) => {
    const obj = {
      email: data.email.trim().toLowerCase(),
      password: data.password,
    };
    let flag = logininUser(obj);

    if (!flag) {
      console.log(flag);
      return;
    }

    navigate("/home", { replace: true });
    reset();
  };

  const registerFormSubmit = (data) => {
    const obj = {
      id: String(Date.now()),
      avatar: data.name.trim()[0].toUpperCase(),
      name: data.name.trim().toLowerCase(),
      email: data.email.trim().toLowerCase(),
      password: data.password,
      joinedAt: new Date().toLocaleString(),
    };
    let flag = registerUser(obj);

    if (!flag) {
      return;
    }

    navigate("/");
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    getValues,
    errors,
    loginFormSubmit,
    registerFormSubmit,
  };
};
