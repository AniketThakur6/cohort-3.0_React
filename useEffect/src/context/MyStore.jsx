import { useState, createContext } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const incrementCart = (id) => {
    setCartItems((prev) =>
      prev.map((elem) =>
        elem.id === id ? { ...elem, quantity: elem.quantity + 1 } : elem,
      ),
    );
  };

  const decrementCart = (id) => {
    setCartItems((prev) =>
      prev.map((elem) =>
          elem.id === id ? { ...elem, quantity: elem.quantity - 1 } : elem
      ).filter((elem) => elem.quantity > 0),
    );
  };

  return (
    <MyStore.Provider
      value={{
        toggle,
        setToggle,
        cartItems,
        setCartItems,
        incrementCart,
        decrementCart,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
