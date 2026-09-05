import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { loginUserAction } from "../state/authAction";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const loginForm =(data) => {
    try {
      //api calling
      dispatch(loginUserAction(data));
    } catch (error) {
      console.log("form api error",error)
    }
  };

  const registerForm = (data) => {
    console.log(data);
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    getValues,
    errors,
    loginForm,
    registerForm,
  };
};
