import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  
  const [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem("registerUser")) ||  [])

  const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("currentUser")) || null)

  const saveLocal = ({name,data})=>{
    localStorage.setItem(name,JSON.stringify(data));
  }

  return (
    <AuthContext.Provider
      value={{
        saveLocal,
        registerUser,
        setRegisterUser,
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )

}

export default AuthProvider