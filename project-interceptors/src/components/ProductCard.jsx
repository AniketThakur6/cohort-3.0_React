const ProductCard = ({ product }) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_16px_40px_rgba(34,211,238,0.12)]">
      {/* Image */}
      <div className="flex h-52 items-center justify-center rounded-xl bg-slate-800/80">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-4"
        />
      </div>

      {/* Category */}
      <p className="mt-4 text-sm font-medium capitalize text-cyan-400">
        {product.category}
      </p>

      {/* Title */}
      <h2 className="mt-1 text-lg font-semibold text-slate-100 line-clamp-2">
        {product.title}
      </h2>

      {/* Description */}
      <p className="mt-2 text-sm leading-6 text-slate-400 line-clamp-2">
        {product.description}
      </p>

      {/* Rating */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-yellow-400">★</span>
        <span className="text-sm text-slate-300">
          {product.rating.rate} ({product.rating.count})
        </span>
      </div>

      {/* Price */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="text-xl font-bold text-slate-50">
          ${product.price}
        </span>

        <button className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
