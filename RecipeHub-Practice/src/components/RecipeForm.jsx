import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/MyStore";
import { nanoid } from 'nanoid';

function RecipeForm() {
  const { setRecipes } = useContext(MyStore);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const submitHandler = (data) => {
    setRecipes((prev) => [...prev, { ...data, rating: 3.5 , id:nanoid()}]);
    reset();
  };

  return (
    <aside className="w-full lg:w-[35%]">
      <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-28">
        <h2 className="text-3xl font-bold mb-2">Add New Recipe</h2>

        <p className="text-gray-500 mb-6">
          Share your delicious recipe with everyone.
        </p>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          {/* Recipe Name */}

          <div>
            <label className="block mb-2 font-medium">Recipe Name</label>

            <input
              {...register("name", {
                required: "recipeName is required",
                minLength: {
                  value: 5,
                  message: "Minimun 5 letter is required ",
                },
              })}
              type="text"
              placeholder="Recipe Name"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.name && (
              <p className="text-red-700 text-lg">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Chef Name */}

          <div>
            <label className="block mb-2 font-medium">Chef Name</label>

            <input
              {...register("chef", {
                required: "chefName is required",
                minLength: {
                  value: 3,
                  message: "Minimun 3 letter is required ",
                },
              })}
              type="text"
              placeholder="Chef Name"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.chef && (
              <p className="text-red-700 text-lg">{errors.chef.message}</p>
            )}
          </div>

          {/* Price + Time */}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">Price</label>

              <input
                {...register("price", {
                  required: "price is required",
                  valueAsNumber: true,
                  min: {
                    value: 1,
                    message: "Minimun $1 price is required",
                  },
                })}
                type="number"
                step="0.01"
                placeholder="Price"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.price && (
                <p className="text-red-700 text-lg">{errors.price.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium">Prep Time</label>

              <input
                {...register("time", {
                  required: "prepTime is required",
                  min: {
                    value: 10,
                    message: "Minimun 10min prepTime is required",
                  },
                })}
                type="text"
                placeholder="30 mins"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.time && (
                <p className="text-red-700 text-lg">
                  {errors.time.message}
                </p>
              )}
            </div>
          </div>

          {/* Image */}

          <div>
            <label className="block mb-2 font-medium">Image URL</label>

            <input
              {...register("image", {
                required: "Image is required",
              })}
              type="url"
              name="image"
              placeholder="Paste Image URL"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.image && (
              <p className="text-red-700 text-lg">{errors.image.message}</p>
            )}
          </div>

          {/* Description */}

          <div>
            <label className="block mb-2 font-medium">Description</label>

            <textarea
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 50,
                  message: "Description must be at least 50 letters",
                },
              })}
              rows="4"
              name="description"
              placeholder="Description..."
              className="w-full border rounded-lg p-3 outline-none resize-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.description && (
              <p className="text-red-700 text-lg">
                {errors.description.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Create Recipe
          </button>
        </form>
      </div>
    </aside>
  );
}

export default RecipeForm;
