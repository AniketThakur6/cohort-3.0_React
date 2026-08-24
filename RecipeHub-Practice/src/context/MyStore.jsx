import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Classic Margherita",
      chef: "Chef Mario",
      price: 24,
      rating: 4.8,
      time: "30 mins",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
      description:
        "Hand-stretched sourdough base topped with mozzarella and fresh basil.",
    },

    {
      id: 2,
      name: "Salmon Zen Bowl",
      chef: "Chef Elena",
      price: 32,
      rating: 4.9,
      time: "25 mins",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
      description: "Healthy salmon bowl with avocado, quinoa and vegetables.",
    },

    {
      id: 3,
      name: "Prime Wagyu Steak",
      chef: "Chef Giovanni",
      price: 65,
      rating: 5.0,
      time: "45 mins",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
      description: "Premium A5 Wagyu served with truffle mashed potatoes.",
    },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const incrementCartitem = (id) => {
    setCartItems((prev) =>
      prev.map((elem) =>
        elem.id === id ? { ...elem, quantity: elem.quantity + 1 } : elem,
      ),
    );
  };

  const decrementCartitem = (id) => {
    setCartItems((prev) =>
      prev
        .map((elem) =>
          elem.id === id ? { ...elem, quantity: elem.quantity - 1 } : elem,
        )
        .filter(elem => elem.quantity > 0),
    );
  };

  return (
    <MyStore.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        recipes,
        setRecipes,
        cartItems,
        setCartItems,
        incrementCartitem,
        decrementCartitem
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
