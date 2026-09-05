import {
  categoriesByProducts,
  useAllProducts,
} from "../../hooks/useProductHook";
import SearchFilters from "../components/SearchFilters";
import ProductCardSkeleton from "./../components/ProductCardSkeleton";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const { data, isPending, search, setSearch } = useAllProducts();

  const {
    data: productsCategory,
    isPending: categoryPending,
    error,
    setCategories,
    categories,
  } = categoriesByProducts();


  return (
    <div className="px-20 py-5 mt-2">
      <SearchFilters
        search={search}
        setSearch={setSearch}
        setCategories={setCategories}
      />
      <div className=" mt-10 grid grid-cols-5 gap-5 h-full w-full">
        {isPending || categoryPending
          ? Array.from({ length: 10 }).map((_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))
          : productsCategory.products?.length
            ? productsCategory.products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : data?.products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
      </div>
    </div>
  );
};

export default ProductsPage;
