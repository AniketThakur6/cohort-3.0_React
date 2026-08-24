import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import RecipeForm from "../components/RecipeForm";
import RecipeGrid from "../components/RecipeGrid";
import CartDrawer from "../components/CartDrawer";
import { MyStore } from "../context/MyStore";

function Home() {

  let { isCartOpen } = useContext(MyStore)

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-8">
        {/* Left Side */}
        <RecipeForm />

        {/* Right Side */}
        <RecipeGrid />
      </main>

      

      {isCartOpen?<CartDrawer />:""}
    </>
  );
}

export default Home;
