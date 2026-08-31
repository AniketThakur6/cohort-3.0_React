import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const WelcomeBanner = () => {

  const { toShop } =useContext(MyContext)

  return (
    <section className="relative mx-auto mt-8 w-full max-w-304 overflow-hidden rounded-[26px] border border-zinc-400 bg-[#111111] px-8 py-8 sm:px-10 sm:py-9 lg:mt-10 lg:px-12 lg:py-12">
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

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        {/* Left Content */}
        <div>
          <p className="mb-3 text-base font-semibold tracking-wide text-lime-400">
            GOOD EVENING 👋
          </p>

          <h1 className="text-[38px] font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl">
            Welcome back,
            <br />
            <span className="text-lime-400">aniket!</span>
          </h1>

          <p className="mt-5 max-w-lg text-[15px] leading-6 text-gray-500">
            Discover today's picks — hand-curated products across
            electronics, fashion, and more.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 min-[460px]:flex-row">
            <button onClick={toShop} className="min-[460px]:w-auto rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition-colors hover:bg-lime-300">
              Shop Now&nbsp; →
            </button>

            <button onClick={toShop} className="min-[460px]:w-auto rounded-xl border border-[#292929] px-6 py-3 text-gray-400 transition-colors hover:border-zinc-600 hover:text-gray-200">
              View All Products
            </button>
          </div>
        </div>

        {/* Right Stats */}
        <div className="grid w-46.5 grid-cols-1 gap-3 self-start lg:w-43.25 lg:shrink-0">
          <div className="rounded-2xl border border-lime-900 bg-lime-950/60 px-4 py-5 text-center">
            <p className="text-3xl font-bold text-lime-400">20+</p>

            <p className="mt-1 text-sm text-gray-500">Products Available</p>
          </div>

          <div className="rounded-2xl border border-gray-500 px-4 py-5 text-center">
            <p className="text-2xl font-semibold text-white">Free</p>

            <p className="mt-1 text-sm text-gray-500">Delivery on ₹999+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;
