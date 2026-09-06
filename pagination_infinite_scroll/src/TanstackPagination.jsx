import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { getProductNormal } from "./api/productApis";
import { useState } from "react";
import ProductCard from "./components/ProductCard";

const TanstackPagination = () => {
  let limit = 20;

  const [page, setPage] = useState(0);

  const { data, isPending, error, isPlaceholderData } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProductNormal({ limit, skip: limit * page }),
    placeholderData: keepPreviousData,
  });

  let totalPages = Math.ceil(data?.total / limit);

  return (
    <div className="flex flex-col min-h-screen justify-between text-white bg-black">
      <div
        className={`grid grid-cols-5 p-10 gap-6 ${isPlaceholderData ? "opacity-75" : "opacity-100"} `}
      >
        {data?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 my-8">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 0}
          className={`bg-blue-600  ${page === 0 ? "opacity-55" : "opacity-100"} py-1 px-4 text-xl rounded-lg`}
        >
          Prev
        </button>
        <span className="text-xl">
          page {page + 1} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === totalPages - 1}
          className={`bg-blue-600  ${page === totalPages - 1 ? "opacity-55" : "opacity-100"} py-1 px-4 text-xl rounded-lg`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TanstackPagination;
