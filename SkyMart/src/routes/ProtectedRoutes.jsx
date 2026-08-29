import React, { useContext } from "react";
import { Navigate } from "react-router";
import { MyContext } from "./../context/MyContext";

export const GuestRoute = ({children}) => {
  const { currentUser } = useContext(MyContext)
  
  if(Object.keys(currentUser || {}).length){
    return <Navigate to={'/home'} replace />
  }

  return children;
}


const ProtectedRoutes = ({ children }) => {
  let { currentUser } = useContext(MyContext);

  if (Object.keys(currentUser || {}).length) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoutes;
