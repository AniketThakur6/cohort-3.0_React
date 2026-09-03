import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser } from "../features/authSlice";

export const useAuth = () => {

  const dispatch = useDispatch();

  let navigate = useNavigate();
  const [registerUsers, setRegisterUsers] = useState(
    JSON.parse(localStorage.getItem("registerUser")) || [],
  );

  const {
    register,
    getValues,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const loginFormSubmit = (data) => {

    const user = registerUsers.find(elem => elem.email === data.email && elem.password === data.password);

    if(!user){
      toast.error("invalid user or password");
      return;
    }

    dispatch(addUser(user));
    localStorage.setItem("curr_user",JSON.stringify(user));
    toast.success("user is logged in successfully")
    navigate('/home')
  };

  const registerFormSubmit = (data) =>{

    const user = registerUsers.find(elem => elem.email === data.email)

    if(user){
      toast.error("user already exist  with this email")
      return;
    }

    let obj = {
      name: data.name,
      email: data.email,
      password : data.password,
      joinedAt: new Date().toLocaleString()
    }

    let register = [...registerUsers,obj];

    localStorage.setItem("registerUser",JSON.stringify(register));
    setRegisterUsers(register);
    toast.success("User Register successfully");
    reset();
    navigate('/')
  }

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    getValues,
    errors,
    registerFormSubmit,
    loginFormSubmit,
  };
};
