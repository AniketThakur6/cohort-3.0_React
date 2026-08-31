import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import AppRouters from "./routes/AppRouters";
import Cart from "./components/Cart";
import { Routes } from "react-router";
import { Route } from "lucide-react";
import { MyContext } from "./context/MyContext";

const App = () => {
  const { toggleCart, message, showMessage } = useContext(MyContext);

  return (
    <div className="bg-zinc-950 relative min-h-screen w-full">
      <Navbar />
      <div>
        {toggleCart ? <Cart /> : ""}
        <AppRouters />
        {showMessage && (
          <div
            className="fixed bottom-4 right-4 z-50 max-w-[calc(100vw-2rem)] border border-[#292929] bg-[#181818] sm:bottom-8 sm:right-12
                  rounded-xl px-4 py-3 text-white flex items-center gap-2"
          >
            <span
              className="w-5 h-5 rounded-full bg-main-color text-black 
                     flex items-center justify-center"
            >
              ✓
            </span>

            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
