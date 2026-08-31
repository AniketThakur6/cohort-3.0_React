import React, { useContext } from "react";
import ShopbyCategoryCard from "./ShopbyCategoryCard";
import { MyContext } from "../../context/MyContext";

const ShopbyCategory = () => {
  const { toShop, setCategoryCount, productsData } = useContext(MyContext);
  let obj = {};
  productsData.map(
    (elem) => (obj[elem.category] = (obj[elem.category] || 0) + 1),
  );

  return (
    <div className="w-full max-w-7xl px-4 py-6 sm:px-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Shop by Category</h2>

        <div
          onClick={toShop}
          className="flex cursor-pointer items-center gap-1 text-[15px] font-medium text-main-color"
        >
          View All
          <span className="text-lg">→</span>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(obj).map((category) => {
          return <ShopbyCategoryCard key={category[1]} category={category} />;
        })}
      </div>
    </div>
  );
};

export default ShopbyCategory;
