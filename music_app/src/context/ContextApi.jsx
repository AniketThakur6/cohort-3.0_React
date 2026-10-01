import { createContext } from "react";

const Store = createContext();

export const ContextProvider = ({ children }) => {

  const registerUser = [];

  return (
    <Store.Provider
      value={{
        registerUser
      }}
    >
      {children}
    </Store.Provider>
  );
};
