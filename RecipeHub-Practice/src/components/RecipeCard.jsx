import { useContext } from "react";
import { MyStore } from "../context/MyStore";

function RecipeCard({ recipe, inCart }) {
  const { setCartItems,incrementCartitem,decrementCartitem } = useContext(MyStore);



  const updateCart = (recipe) => {
    setCartItems((prev) => [...prev, {...recipe,quantity:1}]);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      {/* Image */}

      <div className="relative h-60 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />

        <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-semibold">
          ${recipe.price}
        </span>
      </div>

      {/* Body */}

      <div className="p-5 flex flex-col gap-4">
        {/* Title */}

        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{recipe.name}</h2>

          <span className="text-yellow-500 font-semibold">
            ⭐ {recipe.rating}
          </span>
        </div>

        {/* Description */}

        <p className="text-gray-500">{recipe.description}</p>

        {/* Footer */}

        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold">{recipe.chef}</h4>

            <p className="text-sm text-gray-500">⏱ {recipe.time}</p>
          </div>

          {inCart ? (
            <div className="flex items-center rounded-lg border">
              <button onClick={()=>{decrementCartitem(recipe.id)}} className="px-3 py-1.5" type="button">
                -
              </button>

              <span className="px-4">{inCart.quantity}</span>

              <button onClick={()=>{incrementCartitem(recipe.id)}} className="px-3 py-1.5" type="button">
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                updateCart(recipe);
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
