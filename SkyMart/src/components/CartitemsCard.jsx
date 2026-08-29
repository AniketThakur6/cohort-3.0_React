import React, { useContext } from "react";
import {Minus, Plus, Trash2} from "lucide-react"
import { MyContext } from "../context/MyContext";

const CartitemsCard = ({item}) => {

  const { incrCartItems,decrCartItems,setCartItems,cartItems,showNotification,saveLocal} = useContext(MyContext);

  const deleteCartItems = (id) => {
    showNotification("Removed from cart")
    
    let cart = cartItems.filter(item => item.id !== id)
    saveLocal("cartItems", cart);
    setCartItems(cart)
  }

  return (

      <div className="rounded-2xl border border-gray-400 p-3">
        <div className="flex gap-4">
          {/* Product Image */}
          <div className="flex h-18 w-18 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-[16px] font-medium text-gray-300">
              {item.title}
            </h3>

            <p className="mt-1 text-[16px] font-bold text-main-color">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            <p className="text-sm text-gray-600">${item.price} each</p>

            {/* Quantity */}
            <div className="mt-2 flex items-center gap-3">
              <button onClick={()=> decrCartItems(item.id)} className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#292929] text-gray-400 hover:text-white">
                <Minus size={14} />
              </button>

              <span className="text-sm text-gray-300">{item.quantity}</span>

              <button onClick={()=> incrCartItems(item.id)} className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#292929] text-gray-400 hover:text-white">
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Delete */}
          <button onClick={()=>deleteCartItems(item.id)} className="self-end text-red-500 hover:text-red-400">
            <Trash2 size={16} />
          </button>
        </div>
      </div>
  );
};

export default CartitemsCard;
