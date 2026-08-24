import React ,{ useContext }from "react";
import { MyStore } from "../context/MyStore";

const CartCard = ({ product }) => {
  
  let {incrementCart,decrementCart} = useContext(MyStore)

  return (
    <div className="min-h-55 flex bg-zinc-800 rounded-2xl border-2 border-zinc-700 py-3 px-5 gap-4">
      <div className="flex w-65 justify-center items-center">
        <img className="h-43 object-cover" src={product.image} alt="" />
      </div>

      <div className="flex w-full py-5 gap-4 px-2 flex-col">
        <div className=" capitalize px-2 flex flex-col gap-2">
          <h1 className="bg-zinc-700 flex w-fit text-sm text-blue-600 items-center rounded-full py-1 px-2">
            {product.category}
          </h1>
          <h1 className="text-xl line-clamp-2 leading-7 text-zinc-300">
            {product.title}
          </h1>
          <h1 className="line-clamp-2 leading-5 text-md">
            {product.description}
          </h1>
        </div>

        <div className="flex justify-between text-sm items-center">
          <h1>
            ⭐ {product.rating.rate}{" "}
            <span>({product.rating.count} reviews)</span>{" "}
          </h1>
          <button className="w-40 pb-1 h-10 bg-blue-900 rounded-xl text-2xl flex justify-center items-center gap-4">
            <span onClick={()=> decrementCart(product.id)} className="h-7 w-7 flex justify-center items-center">-</span>
            <span>{product.quantity}</span>
            <span onClick={()=> incrementCart(product.id)} className="h-7 w-7 flex justify-center items-center">+</span>
          </button>
          <h1 className="text-green-400 text-2xl"> $ {product.price} </h1>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
