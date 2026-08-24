import React, { useContext } from "react";
import { MyStore } from "../context/MyStore";
import CartCart from "../components/CartCard"

const Cart = () => {


  let {cartItems} = useContext(MyStore)

  return (
    <div className="flex flex-col gap-10 rounded-lg w-full min-h-158 bg-zinc-900 px-20 py-10 ">
      <div className="text-4xl font-semibold">
        <h1 className="text-center mr-90">Shopping Cart( {cartItems.length} )</h1>
      </div>
      <div className="flex w-7xl gap-10 relative">
        <div className="flex flex-col gap-3 min-h-118 px-5 w-220">
          {/* products */}
        {cartItems.map(product => <CartCart key={product.id} product={product} />)}
        </div>
        

    {/* order summary */}
        <div className="bg-zinc-800 left-225 absolute border-2 rounded-xl border-zinc-700 flex flex-col w-85 h-fit p-6  gap-5">
          <h1 className="text-2xl font-semibold">Order Summary</h1>
          <div className="text-lg flex text-zinc-300 flex-col gap-2">
            <h3 className="flex justify-between">
              <span>Items</span> <span className="text-white">{cartItems.length? cartItems.reduce((total,elem) => total+ elem.quantity ,0): 0}</span>
            </h3>
            <h3 className="flex justify-between">
              <span>Total</span>
              <span className="text-green-600">$ { cartItems.reduce((total,product)=> total+product.price * product.quantity ,0).toFixed(2) }</span>
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
