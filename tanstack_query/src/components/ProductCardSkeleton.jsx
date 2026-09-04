const ProductCardSkeleton = () => {
  return (
    <div className="w-full overflow-hidden rounded-[22px] border border-[#292929] bg-[#111111]">
      {/* Image Section */}
      <div className="relative h-57.5 overflow-hidden bg-zinc-800 animate-pulse">
        {/* Category Skeleton */}
        <div className="absolute left-3 top-3 h-6 w-20 rounded-full bg-zinc-700" />

        {/* Stock Skeleton */}
        <div className="absolute right-3 top-3 h-5 w-16 rounded-full bg-zinc-700" />
      </div>

      {/* Details */}
      <div className="flex h-44.5 flex-col p-4 animate-pulse">
        {/* Brand */}
        <div className="mb-2 h-4 w-16 rounded bg-zinc-700" />

        {/* Title */}
        <div className="h-5 w-3/4 rounded bg-zinc-700" />

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="h-4 w-24 rounded bg-zinc-700" />
          <div className="h-4 w-8 rounded bg-zinc-700" />
        </div>

        {/* Bottom */}
        <div className="mt-auto border-t border-gray-600 pt-3">
          <div className="flex items-center justify-between">
            {/* Price */}
            <div className="flex flex-col gap-1">
              <div className="h-6 w-16 rounded bg-zinc-700" />
              <div className="h-2 w-10 rounded bg-zinc-700" />
            </div>

            {/* Add Button */}
            <div className="h-9 w-20 rounded-full bg-zinc-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
