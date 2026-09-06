import ProductCard from "./components/ProductCard";
import { getInfiniteScrolling } from "./api/productApis";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const InfinitScrolling = () => {
  let limit = 20;

  const { data, fetchNextPage, hasNextPage ,isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getInfiniteScrolling(limit, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPage) => {
      let loadedData = allPage.length * limit;

      // if(loadedData <= lastPage.total) return loadedData;

      return loadedData <= lastPage.total ? loadedData : undefined;
    },
  });

  const handleScroll = () => {
    const bottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 200;

    if (bottom && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  }, [ hasNextPage ]);

  let allProducts = data?.pages?.flatMap((val) => val.products);

  console.log(data);
  return (
    <div className="flex flex-col min-h-screen justify-between text-white bg-black">
      <div className={`grid grid-cols-5 p-10 gap-6 `}>
        {allProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* <div className="flex justify-center items-center gap-6 my-8">
        {hasNextPage && <button
          onClick={fetchNextPage}
          disabled={hasNextPage === false}
          className={`bg-blue-600 py-1 px-4 text-xl rounded-lg`}
        >
          Load more
        </button>}
      </div> */}
    </div>
  );
};

export default InfinitScrolling;
