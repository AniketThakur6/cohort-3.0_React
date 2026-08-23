import React, { useContext } from "react";
import { MyStore } from "../context/MyShop";

const Cart = () => {

  let { cartItems } = useContext(MyStore)

  return (
    <div className="flex flex-col gap-10 rounded-lg w-full min-h-158 bg-zinc-900 px-20 py-10 ">
      <div className="text-4xl font-semibold">
        <h1 className="text-center mr-90">Shopping Cart( {cartItems.length} )</h1>
      </div>
      <div className="flex w-7xl gap-10 relative">
        <div className="flex flex-col gap-3 min-h-118 px-5 w-220">
          {/* products */}
        {cartItems.map(product => (
          <div className="h-60 flex bg-zinc-800 rounded-2xl border-2 border-zinc-700 p-5 gap-4">
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
                <h1 className="text-green-400 text-2xl"> $ {product.price} </h1>
              </div>
            </div>
          </div>))}
        </div>
        

        {/* order summary */}
        <div className="bg-zinc-800 left-225 absolute border-2 rounded-xl border-zinc-700 flex flex-col w-85 h-fit p-6  gap-5">
          <h1 className="text-2xl font-semibold">Order Summary</h1>
          <div className="text-lg flex text-zinc-300 flex-col gap-2">
            <h3 className="flex justify-between">
              <span>Items</span> <span className="text-white">{cartItems.length}</span>
            </h3>
            <h3 className="flex justify-between">
              <span>Total</span>{" "}
              <span className="text-green-600">{ cartItems.reduce((total,product)=> total+product.price ,0) }</span>
            </h3>
          </div>
          <button className="bg-zinc-950 text-xl rounded-lg py-3">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
