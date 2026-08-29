import React, { useContext } from "react";
import { Box, TrendingUp, Star, Tag } from "lucide-react";
import WelcomeBanner from "./../components/WelcomeBanner";
import PageFooter from "../components/PageFooter";
import ShopbyCategory from "../components/HomeComponents/ShopbyCategory";
import TopProductCard from "../components/HomeComponents/TopProductCard";
import { MyContext } from "../context/MyContext";

const HomePage = () => {
  const { toShop,productsData,cartItems } = useContext(MyContext);

  return (
    <div className="flex flex-col gap-10 w-full items-center">
      <div>
        <WelcomeBanner />
      </div>
      <div className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 w-7xl">
        {/* Cart Items */}
        <div className="flex h-30 items-center gap-4 rounded-[22px] border border-gray-500 bg-[#101010] px-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime-950/60 text-main-color">
            <Box size={22} strokeWidth={2} />
          </div>

          <div className="flex flex-col">
            <span className="text-[20px] font-semibold leading-6 text-white">
              {cartItems.reduce((total,item)=> total + item.quantity,0)}
            </span>
            <span className="mt-1 text-[15px] font-medium text-gray-400">
              Cart Items
            </span>
            <span className="text-[15px] text-gray-600">In your bag</span>
          </div>
        </div>

        {/* Cart Value */}
        <div className="flex h-30 items-center gap-4 rounded-[22px] border border-gray-500 bg-[#101010] px-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-950/60 text-blue-400">
            <TrendingUp size={22} strokeWidth={2} />
          </div>

          <div className="flex flex-col">
            <span className="text-[20px] font-semibold leading-6 text-white">
              ${(cartItems.reduce((total,item)=> total + item.price*item.quantity,0)).toFixed(2) || "0"}
            </span>
            <span className="mt-1 text-[15px] font-medium text-gray-400">
              Cart Value
            </span>
            <span className="text-[15px] text-gray-600">Ready to checkout</span>
          </div>
        </div>

        {/* Top Products */}
        <div className="flex h-30 items-center gap-4 rounded-[22px] border border-gray-500 bg-[#101010] px-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-950/60 text-yellow-400">
            <Star size={22} strokeWidth={2} />
          </div>

          <div className="flex flex-col">
            <span className="text-[20px] font-semibold leading-6 text-white">
              5
            </span>
            <span className="mt-1 text-[15px] font-medium text-gray-400">
              Top Products
            </span>
            <span className="text-[15px] text-gray-600">Highly rated</span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex h-30 items-center gap-4 rounded-[22px] border border-gray-500 bg-[#101010] px-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-950/60 text-purple-400">
            <Tag size={22} strokeWidth={2} />
          </div>

          <div className="flex flex-col">
            <span className="text-[20px] font-semibold leading-6 text-white">
              6
            </span>
            <span className="mt-1 text-[15px] font-medium text-gray-400">
              Categories
            </span>
            <span className="text-[15px] text-gray-600">To explore</span>
          </div>
        </div>
      </div>

      <ShopbyCategory />

      <div className="flex w-7xl gap-10 bg-[#0b0b0b]">
        {/* Top Rated */}
        <div className="w-full max-w-150  rounded-3xl border border-zinc-400 bg-[#121212] p-6">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl text-yellow-400">★</span>

              <h2 className="text-[18px] font-semibold text-white">
                Top Rated
              </h2>
            </div>

            <div
              onClick={toShop}
              className="cursor-pointer text-[14px] text-main-color"
            >
              See all →
            </div>
          </div>

          {/* Product Card */}
          <div className="w-full h-full flex flex-col gap-2">
            {productsData.slice(0,5).map(product => 
              <TopProductCard key={product.id} product={product} />
            )}
          </div>
        </div>

        {/* Top Rated */}
        <div className="w-full max-w-150 rounded-3xl border border-zinc-400 bg-[#121212] p-6">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl text-yellow-400">⚡</span>

              <h2 className="text-[18px] font-semibold text-white">
                New Arrivals
              </h2>
            </div>

            <div
              onClick={toShop}
              className="cursor-pointer text-[14px] text-main-color"
            >
              See all →
            </div>
          </div>

          {/* Product Card */}
          <div className="w-full h-full flex flex-col gap-2">
            {productsData.slice(10,15).map(product => 
              <TopProductCard key={product.id} product={product} />
            )}
          </div>
        </div>
      </div>

      <div className="grid w-7xl grid-cols-1 gap-4 bg-[#0b0b0b]  px-2 py-4 md:grid-cols-3">
        {/* Fast Delivery */}
        <div className="flex h-19.5 items-center gap-4 rounded-2xl border border-zinc-400 bg-[#101010] px-6">
          <div className="text-3xl text-main-color">⚡</div>

          <div>
            <h3 className="text-[16px] font-semibold text-gray-200">
              Fast Delivery
            </h3>

            <p className="text-[15px] text-gray-600">
              Same-day on select items
            </p>
          </div>
        </div>

        {/* Secure Payments */}
        <div className="flex h-19.5 items-center gap-4 rounded-2xl border border-zinc-400 bg-[#101010] px-6">
          <div className="text-2xl text-blue-400">♢</div>

          <div>
            <h3 className="text-[16px] font-semibold text-gray-200">
              Secure Payments
            </h3>

            <p className="text-[15px] text-gray-600">100% encrypted checkout</p>
          </div>
        </div>

        {/* Best Prices */}
        <div className="flex h-19.5 items-center gap-4 rounded-2xl border border-zinc-400 bg-[#101010] px-6">
          <div className="text-2xl text-green-400">🏷</div>

          <div>
            <h3 className="text-[16px] font-semibold text-gray-200">
              Best Prices
            </h3>

            <p className="text-[15px] text-gray-600">Price-match guarantee</p>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
};

export default HomePage;
