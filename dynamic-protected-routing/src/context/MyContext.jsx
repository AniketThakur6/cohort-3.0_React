import { createContext,useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  
  const [productsData, setProductsData] = useState([])
  
  return (
    <MyContext.Provider value={{productsData,setProductsData}}>
     {children}
    </MyContext.Provider>);
};
