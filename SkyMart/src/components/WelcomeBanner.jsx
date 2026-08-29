import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const WelcomeBanner = () => {

  const { toShop } =useContext(MyContext)

  return (
    <section className="relative mx-auto mt-8 w-7xl overflow-hidden rounded-3xl border border-gray-200 bg-[#111111] px-12 py-12">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(#252525 1px, transparent 1px),
              linear-gradient(90deg, #252525 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative flex items-center justify-between">
        {/* Left Content */}
        <div>
          <p className="mb-3 text-lg font-semibold tracking-wide text-lime-400">
            GOOD EVENING 👋
          </p>

          <h1 className="text-5xl font-semibold leading-none text-white">
            Welcome back,
            <br />
            <span className="text-lime-400">aniket!</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-6 text-gray-500">
            Discover today's picks — hand-curated products across
            <br />
            electronics, fashion, and more.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex gap-3">
            <button onClick={toShop} className="rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black">
              Shop Now&nbsp; →
            </button>

            <button onClick={toShop} className="rounded-xl border border-[#292929] px-6 py-3 text-gray-400">
              View All Products
            </button>
          </div>
        </div>

        {/* Right Stats */}
        <div className="flex w-48 flex-col gap-3">
          <div className="rounded-2xl border border-lime-900 bg-lime-950/60 px-5 py-6 text-center">
            <p className="text-3xl font-bold text-lime-400">20+</p>

            <p className="mt-1 text-sm text-gray-500">Products Available</p>
          </div>

          <div className="rounded-2xl border border-gray-500 px-5 py-5 text-center">
            <p className="text-2xl font-semibold text-white">Free</p>

            <p className="mt-1 text-sm text-gray-500">Delivery on ₹999+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;
