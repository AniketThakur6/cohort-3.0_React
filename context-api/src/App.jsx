import React, { useContext,useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { MyStore } from "./context/MyShop";

const App = () => {

  let { products , toggle } = useContext(MyStore)

  return (
    <div className="bg-black flex flex-col gap-6 min-h-screen w-full text-white p-6">
      <Navbar />

      {toggle ? (
        <div className=" p-3 flex gap-4 w-full flex-wrap h-full">
          {products.map((elem) => (
            <ProductCard key={elem.id} product={elem} />
          ))}
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
