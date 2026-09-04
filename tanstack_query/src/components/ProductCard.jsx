import { Star, ShoppingCart } from "lucide-react";

function Rating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex text-main-color">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            fill={star <= rating ? "#C8F400" : "none"}
            strokeWidth={1}
          />
        ))}
      </div>

      <span className="text-white">{rating}</span>
    </div>
  );
}

const ProductCard = ({ product }) => {
  return (
    <div className="group w-full overflow-hidden rounded-[22px] border border-[#292929] bg-[#111111] transition-all duration-300 hover:inset-shadow-md hover:border-main-color">

      {/* Image Section */}
      <div className="relative h-57.5 overflow-hidden bg-zinc-400">

        {/* Category */}
        <span className="absolute left-3 top-3 z-10 rounded-full bg-gray-500 px-2.5 py-0.5 text-sm font-medium text-white">
          {product.category}
        </span>

        {/* Stock Status */}
        <span
          className={`absolute right-3 top-3 z-10 rounded-full px-2.5 py-0.5 text-xs font-medium ${
            product.availabilityStatus === "In Stock"
              ? "bg-green-500 text-black"
              : "bg-red-500 text-white"
          }`}
        >
          {product.availabilityStatus}
        </span>

        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.12]"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col p-4">

        {/* Brand */}
        <p className="mb-1 text-sm text-gray-500">
          {product.brand}
        </p>

        {/* Title */}
        <h3 className="line-clamp-1 text-[16px]  font-semibold leading-5 text-white">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="mt-3 text-lg flex items-center gap-1">
          <Rating rating={product.rating} />

          <span className="ml-1 text-gray-600">
            ({product.reviews?.length || 0})
          </span>
        </div>

        {/* Bottom */}
        <div className="mt-auto border-t border-gray-600 pt-1">
          <div className="flex items-center justify-between">

            {/* Price */}
            <div className="flex flex-col">
              <span className="text-lg font-bold text-main-color">
                ${product.price}
              </span>

              <span className="text-[4px] text-gray-500">
                {product.discountPercentage}% OFF
              </span>
            </div>

            {/* Add Button */}
            <button className="flex items-center gap-2 rounded-full bg-yellow-500 px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-105">
              <ShoppingCart size={15} />
              Add
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
