import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedUser")),
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("registerUser")) || [],
  );

  const saveLocal = (key, value) => {
    localStorage.setItem(`${key}`, JSON.stringify(value));
  };

  const registerUser = (user) => {
    const obj = userData.find((elem) => elem.email === user.email);

    if (obj) {
      toast.error("user already present");
      return false;
    }

    const data = [...userData, user];

    saveLocal("registerUser", data);
    setUserData(data);
    toast.success("User is register successfully");
    return true;
  };

  const logininUser = (user) => {
    const logUser = userData.find(
      (elem) => elem.password === user.password && elem.email === user.email,
    );



    if (!logUser) {
      toast.error("Invalid credentials");
      return false;
    }

    saveLocal("loggedUser", logUser);
    setLoggedIn(logUser);
    toast.success("User loggedIn successfully");
    return true;
  };

  const logoutUser = () => {
    console.log("logout")
    toast.success("User loggedOut Successfully")
    setLoggedIn(null);
    localStorage.removeItem("loggedUser")
  }

  return (
    <Auth.Provider value={{ loggedIn, setLoggedIn, logininUser, registerUser,logoutUser }}>
      {children}
    </Auth.Provider>
  );
};
