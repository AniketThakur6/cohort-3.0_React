import { useContext } from "react";
import { MyStore } from "../context/MyStore";
import CartItem from "./CartItem";

const CartDrawer = () => {
  let { setIsCartOpen,setCartItems,cartItems } = useContext(MyStore);

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close cart drawer"
        className="absolute inset-0 bg-black/40"
      />

      <aside className="absolute right-0 top-0 flex h-screen w-full flex-col bg-white shadow-2xl sm:w-96">
        {/* Header */}

        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-2xl font-bold">Your Cart</h2>

          <button
            onClick={() => {
              setIsCartOpen((prev) => !prev);
            }}
            type="button"
            className="text-3xl font-bold"
            aria-label="Close cart drawer"
          >
            ×
          </button>
        </div>

        {/* Cart Items */}

        <div className="flex-1 space-y-5 overflow-y-auto p-5">
          {/* Cart Item */}

          {cartItems.map(elem => <CartItem key={elem.id} recipe={elem} />)}
        </div>

        {/* Footer */}

        <div className="border-t p-5">
          <div className="mb-4 flex justify-between text-lg">
            <span>Total</span>

            <span className="font-bold text-orange-500">
              {cartItems.reduce((total,elem)=> total + elem.price * elem.quantity ,0).toFixed(2)}
            </span>
          </div>

          <button
            className="w-full rounded-lg bg-orange-500 py-3 text-white transition hover:bg-orange-600"
            type="button"
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
