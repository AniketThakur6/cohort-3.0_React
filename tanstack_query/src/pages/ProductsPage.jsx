import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProduct";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import SearchFilters from "../components/SearchFilter";

const ProductsPage = () => {
  const {
    filterData,
    isPending,
    error,
    handleChange,
    clear,
    clearAll,
    filterValue,
  } = useProducts();

  console.log("page if redndering");

  if (error) {
    return <h1> {error} </h1>;
  }

  return (
    <div className="px-20 py-5 mt-10">
      <SearchFilters
        handleChange={handleChange}
        clearAll={clearAll}
        clear ={ clear}
        filterValue={filterValue}
      />
      <div className=" mt-10 grid grid-cols-5 gap-5 h-full w-full">
        {isPending
          ? Array.from({ length: 10 }).map((_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))
          : filterData?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductsPage;
