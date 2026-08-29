import React, { useContext } from "react";
import {ShoppingBag } from "lucide-react";
import { MyContext } from "../../context/MyContext";

const TopProductCard = ({product}) => {

  const {addToCart,incrCartItems,cartItems} = useContext(MyContext);

  return (
    <div className="flex h-23 items-center justify-between rounded-[18px] border border-[#2a2a2a] bg-[#0f0f0f] px-4">
      {/* Product Info */}
      <div className="flex items-center gap-4">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="h-12.5 w-12.5 rounded-lg object-cover"
        />

        {/* Price */}
        <div className="flex flex-col gap-1">
          <span className="text-[16px] text-zinc-300">
           {product.title} 
          </span>
          <span className="text-[16px] font-semibold text-main-color">
          ${product.price}
        </span>
        </div>
      </div>

      {/* Cart Button */}
      <button onClick={()=> {
        if(cartItems.find(elem => elem.id === product.id)){
          incrCartItems(product.id)
        }
        else{
          addToCart(product)
        }
      }} className="flex h-9 w-9 items-center justify-center rounded-xl bg-main-color/10 text-main-color">
        <ShoppingBag size={18} strokeWidth={2} />
      </button>
    </div>
  );
};

export default TopProductCard;
