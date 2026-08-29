import { Star, ShoppingCart, Minus, Plus } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { MyContext } from "../context/MyContext";

function Rating({ rating }) {
  return (
    <div className="flex items-center gap-1">
    <div className="flex text-main-color">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star 
        key={star} 
        size={14} 
        fill={star <= rating ? "#C8F400":"none"} 
        strokeWidth={1} />
      ))}
    </div>
      {rating}
    </div>
  );
}

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {addToCart,cartItems,incrCartItems,decrCartItems} = useContext(MyContext);

  const item = cartItems.find(item => item.id === product.id)

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="group h-105 w-full overflow-hidden rounded-[22px] border border-[#292929] bg-[#111111] transition-all duration-300 hover:inset-shadow-md hover:border-main-color"
    >
      {/* Image Section */}
      <div className="relative h-57.5 overflow-hidden bg-white">
        {/* Category */}
        <span className="absolute left-3 top-3 z-10 rounded-full bg-gray-500 px-2.5 py-0.5 text-sm font-medium text-white">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.12]"
        />
      </div>

      {/* Details */}
      <div className="flex h-47.5 flex-col p-4">
        <p className="mb-2 text-gray-600">{product.category}</p>

        <h3 className="line-clamp-2 text-[16px] font-semibold leading-5 text-white">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-1">
          <Rating rating={ product.rating.rate } />
          <span className="ml-1 text-gray-600">({product.rating.count})</span>
        </div>

        <div className="mt-auto border-t border-gray-600 pt-3">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-main-color">
              ${product.price}
            </span>

            {item? <button onClick={(e)=> e.stopPropagation()} className="flex items-center gap-5 rounded-full bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105">
              <Minus onClick={()=> decrCartItems(item.id)} size={15} />
              {item.quantity}
              <Plus onClick={()=> incrCartItems(item.id)} size={15} />  
            </button> : <button onClick={(e)=>{ 
              e.stopPropagation()
              addToCart(product)}} className="flex items-center gap-2 rounded-full bg-main-color px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-105">
              <ShoppingCart size={15} />
              Add
            </button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
