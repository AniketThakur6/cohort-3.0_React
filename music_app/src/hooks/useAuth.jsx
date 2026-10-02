import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from './../context/AuthContext';

export const useAuth = () => {
  const { registerUser, saveLocal, setRegisterUser, loggedIn, setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [role, setRole] = useState("listener");
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const registerFormSubmit = (data) => {
    if (!isChecked) {
      toast.error("Please accept the Terms of Service and Privacy Policy");
      return;
    }

    const { email, name, username, password } = data;

    const isAlreadyExists = registerUser.find(
      (user) => user.email === email.trim(),
    );

    if (isAlreadyExists) {
      toast.error("User Already Exist with this email address");
      return;
    }

    const obj = {
      role,
      email: email.trim(),
      name: name.trim(),
      username: username.trim(),
      password: password.trim(),
      joinedAt: new Date(),
    };

    const register = [...registerUser, obj];

    saveLocal({
      name: "registerUser",
      data: register,
    });
    setRegisterUser(register);
    toast.success("User register successfully");
    reset();
    navigate("/");
  };

  const loginFormSubmit = (data)=>{
    
    const user = registerUser.find(user => user.email === data.email && user.password === data.password )

    if(!user){
      toast.error(`user with this email doesn't exists`)      
      return;
    }

    const currUser = {...user,loginAt:new Date()}

    saveLocal({
      name:"currentUser",
      data:currUser, 
    })
    setLoggedIn(currUser);
    toast.success("user logged in successfully");    
    reset();
  }

  return {
    register,
    handleSubmit,
    getValues,
    reset,
    registerUser,
    saveLocal,
    setRegisterUser,
    role,
    setRole,
    errors,
    isChecked,
    setIsChecked,
    registerFormSubmit,
    loginFormSubmit,
    navigate,
  };
};
