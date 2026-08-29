import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";
import { useNavigate, useParams } from "react-router";
import PageFooter from "./PageFooter";
import ProductCard from "./ProductCard";

function Rating({ rating = 4, reviews = 200 }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={17}
            fill={star <= rating ? "#C8F400" : "none"}
            stroke={star <= rating ? "#C8F400" : "#666"}
          />
        ))}
      </div>

      <span className="text-gray-300">{rating.toFixed(1)}</span>
      <span className="text-gray-500">({reviews} reviews)</span>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex h-24 flex-1 flex-col items-center justify-center rounded-2xl border border-[#444]">
      <Icon size={17} className="mb-2 text-main-color" />

      <p className="text-sm font-semibold text-gray-400">{title}</p>

      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
}

export default function ProductDetails() {
  const {
    addToCart,
    productsData,
    setProductsData,
    toShop,
    cartItems,
    setToggleCart,
    incrCartItems,
    decrCartItems,
  } = useContext(MyContext);

  const navigate = useNavigate();

  let { id } = useParams();

  const product = productsData.find((item) => String(item.id) === id);

  const item = cartItems.find((elem) => elem.id === product.id);

  if (!product) {
    return <p className="p-8 text-white">Product not found</p>;
  }

  const favourite = (id) => {
    setProductsData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, like: !item.like } : item)),
    );
  };

  return (
    <div className="flex w-full flex-col gap-12  bg-black">
      <div className="min-h-screen bg-black px-40 py-5 text-white">
        {/* Breadcrumb */}
        <div className="mb-8 mt-8 flex items-center gap-2 text-lg text-gray-500">
          <span
            onClick={toShop}
            className="cursor-pointer hover:text-white flex gap-2 items-center"
          >
            <ArrowLeft size={16} /> Products
          </span>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="max-w-44 truncate">{product.title}</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Product Image */}
          <div className="flex h-128 items-center justify-center rounded-3xl bg-white p-10">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col">
            {/* Category */}
            <span className="mb-5 w-fit rounded-full bg-[#263300] px-3 py-1 text-sm font-semibold text-main-color">
              {product.category}
            </span>

            {/* Title */}
            <h1 className="mb-5 text-3xl font-semibold tracking-tight">
              {product.title}
            </h1>

            {/* Rating */}
            <Rating
              rating={product.rating.rate}
              reviews={product.rating.count}
            />

            <div className="my-6 border-t border-[#3b3b3b]" />

            {/* Price */}
            <p className="text-4xl font-bold text-main-color">
              ${product.price.toFixed(2)}
            </p>

            <div className="my-5 border-t border-[#3b3b3b]" />

            {/* Description */}
            <p className="mb-6 max-w-2xl text-[16px] leading-7 text-gray-500">
              {product.description}
            </p>

            {/* Cart */}
            <div className="mb-6 flex gap-3 items-center">
              {item ? (
                <div className="flex h-16 flex-1 items-center justify-between gap-2 rounded-2xl font-semibold text-white border border-zinc-600 px-4">
                  <span className="font-normal text-zinc-500">In Cart</span>
                  <div className="flex items-center text-gray-300 gap-3">
                    <button
                      onClick={() => decrCartItems(item.id)}
                      className="hover:bg-zinc-800 h-8 w-8 flex items-center justify-center rounded-xl border border-zinc-700"
                    >
                      <Minus
                        size={16}
                        color="#D4D4D8"
                        strokeWidth={1}
                        absoluteStrokeWidth
                      />
                    </button>
                    <span className="font-normal">{item.quantity}</span>
                    <button
                      onClick={() => incrCartItems(item.id)}
                      className="hover:bg-zinc-800 h-8 w-8 flex items-center justify-center rounded-xl border border-zinc-700"
                    >
                      <Plus
                        size={16}
                        color="#D4D4D8"
                        strokeWidth={1}
                        absoluteStrokeWidth
                      />
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="flex h-13 flex-1 items-center justify-center gap-2 rounded-2xl bg-main-color font-semibold text-black transition hover:bg-[#b8e600]"
                >
                  <ShoppingCart size={19} />
                  Add to Cart
                </button>
              )}

             {!product.like ? <button
                onClick={() => favourite(product.id)}
                className="flex h-13 w-13 items-center justify-center rounded-2xl border border-[#333] text-gray-400 transition hover:border-[#555] hover:text-white"
              >
                <Heart size={20} />
              </button>:
              <button
                onClick={() => favourite(product.id)}
                className="flex h-13 w-13 items-center justify-center rounded-2xl border border-[#6b1f25] bg-[#2b1113] text-[#ff6b6b] transition hover:bg-[#351416]"
              >
                <Heart size={20} fill="currentColor" />
              </button>}
            </div>
            {cartItems.some((elem) => elem.id === product.id) ? (
              <div className="mb-5 -mt-2 flex">
                <button
                  onClick={() => setToggleCart((prev) => !prev)}
                  className="flex h-13 flex-1 border border-zinc-500 items-center justify-center gap-2 rounded-2xl font-semibold text-zinc-500 hover:text-white transition hover:bg-zinc-800"
                >
                  <ShoppingCart size={19} />
                  View Cart <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              ""
            )}
            {/* Features */}
            <div className="flex gap-3">
              <FeatureCard
                icon={Truck}
                title="Free Delivery"
                subtitle="On orders $50+"
              />

              <FeatureCard
                icon={ShieldCheck}
                title="Secure Pay"
                subtitle="256-bit SSL"
              />

              <FeatureCard
                icon={RotateCcw}
                title="Easy Returns"
                subtitle="30-day policy"
              />
            </div>

            {/* Navigation */}
            <div className="mt-11 flex gap-3">
              {Number(id) === 1 ? (
                ""
              ) : (
                <button
                  onClick={() => navigate(`/products/${Number(id) - 1}`)}
                  className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#292929] font-medium text-gray-300"
                >
                  <ChevronLeft size={18} />
                  Previous
                </button>
              )}

              {Number(id) === productsData.length ? (
                ""
              ) : (
                <button
                  onClick={() => navigate(`/products/${Number(id) + 1}`)}
                  className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-main-color font-medium text-black"
                >
                  Next
                  <ChevronRight size={18} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="my-12 flex flex-col w-full">
          <h1 className="text-4xl">Related Products</h1>
          <div className="grid grid-cols-5 gap-4 w-full">
            {productsData
              .filter((elem) => elem.category === `${product.category}`)
              .slice(0, 5)
              .map((elem) => (
                <ProductCard key={elem.id} product={elem} />
              ))}
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
