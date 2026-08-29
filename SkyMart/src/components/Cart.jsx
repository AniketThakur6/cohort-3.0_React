import {
  ShoppingBag,
  X,
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  PackageOpen,
} from "lucide-react";
import CartitemsCard from "./CartitemsCard";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Cart = () => {
  const { cartItems, setToggleCart, setCartItems, showNotification, toShop,saveLocal } =
    useContext(MyContext);

  let isCartEmpty = cartItems.length;

  return (
    <div
      onClick={() => setToggleCart((prev) => !prev)}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs"
    >
      {/* Cart Drawer */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute right-0 top-0 flex h-full w-120 flex-col border-l border-[#292929] bg-[#111111]"
      >
        {/* Header */}
        <div className="flex h-30 items-center justify-between border-b border-gray-500 px-6">
          <div className="flex items-center gap-3">
            <ShoppingBag size={21} className="text-main-color" />

            <h2 className="text-xl font-semibold text-white">Cart</h2>

            {isCartEmpty ? (
              <span className="rounded-full bg-[#303900] px-3 py-0.5 text-sm font-medium text-main-color">
                {cartItems.reduce((total, elem) => total + elem.quantity, 0)}{" "}
                items
              </span>
            ) : (
              ""
            )}
          </div>

          <button
            onClick={() => setToggleCart((prev) => !prev)}
            className="text-gray-500 transition hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {isCartEmpty ? (
          <div className="flex flex-col p-6 gap-4 h-full overscroll-contain overflow-y-auto">
            {/* Cart Items */}
            {cartItems.map((item) => (
              <CartitemsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col h-full w-full items-center justify-center text-center">
            <div className="w-35 h-30 rounded-2xl bg-[#1c1c1c] border border-[#303030] flex items-center justify-center mb-5">
              <PackageOpen size={60} className="text-gray-500" />
            </div>

            <h2 className="text-xl font-medium text-gray-200">Cart is empty</h2>

            <p className="text-sm text-gray-500 mt-1">
              Go shop something cool!
            </p>

            <button
              onClick={() => {
                toShop();
                setToggleCart(prev => !prev)
              }}
              className="mt-6 px-7 py-3 rounded-xl bg-main-color text-black font-medium hover:opacity-90"
            >
              Browse Products
            </button>
          </div>
        )}

        {/* Bottom */}
        {isCartEmpty ? (
          <div className="border-t border-gray-500 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-gray-500">Total</span>

              <span className="text-xl font-bold text-white">
                ${" "}
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0,
                  )
                  .toFixed(2)}
              </span>
            </div>

            <button onClick={()=>{
              showNotification("Order placed! 🎉 (Demo)");
                saveLocal("cartItems", []);
                setCartItems([]);
                setToggleCart(prev => !prev)
            }} className="flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-main-color font-medium text-black transition hover:bg-[#b9e900]">
              Checkout
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => {
                setToggleCart(prev => !prev)
                saveLocal("cartItems", []);
                setCartItems([]);
                showNotification("Cart cleared");
              }}
              className="mt-4 w-full text-gray-600 hover:text-red-400"
            >
              Clear cart
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
