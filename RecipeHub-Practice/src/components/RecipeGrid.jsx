import { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { MyStore } from "../context/MyStore";
import CartItem from "./CartItem";

function RecipeGrid() {

  const { recipes,cartItems } = useContext(MyStore)

  return (
    <section className="w-full lg:w-[65%]">
      {/* Heading */}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Discover Recipes</h1>

          <p className="text-gray-500 mt-2">
            Top curated recipes for your next meal.
          </p>
        </div>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => {
          let inCart = cartItems.find(elem => elem.id === recipe.id)
          return <RecipeCard key={recipe.id} recipe={recipe} inCart={inCart} />
})}
      </div>
    </section>
  );
}

export default RecipeGrid;
