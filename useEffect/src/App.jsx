import React, { useContext, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./pages/Cart";
import axios from "axios";
import { MyStore } from "./context/MyStore";
const App = () => {
  let { toggle, cartItems } = useContext(MyStore);

  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-black flex flex-col gap-6 min-h-screen w-full text-white p-6">
      <Navbar />

      {toggle ? (
        <div className=" p-3 flex gap-4 w-full flex-wrap h-full">
          {products.map((elem) => {
            let inCart = cartItems.find((val) => val.id === elem.id);
            return <ProductCard key={elem.id} product={elem} inCart={inCart} />;
          })}
        </div>
      ) : (
        <div className="h-full ">
          <Cart />
        </div>
      )}
    </div>
  );
};

export default App;
