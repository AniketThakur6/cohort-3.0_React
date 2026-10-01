import React, { createContext } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  
  const registerUser = ["hello"];

  const saveLocal = ({name,data})=>{
    localStorage.setItem(name,JSON.stringify(data));
  }

  return (
    <AuthContext.Provider
      value={{
        saveLocal,
        registerUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )

}

export default AuthProvider