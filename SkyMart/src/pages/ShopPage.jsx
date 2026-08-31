import React, { useContext, useEffect } from "react";
import SearchFilters from "../components/SearchFilters";
import ProductCard from "../components/ProductCard";
import { MyContext } from "./../context/MyContext";
import PageFooter from "./../components/PageFooter";
import { useLocation } from "react-router";

const ShopPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { productsData, filterValue, setFilterValue } = useContext(MyContext);

  const searchValue = filterValue.search.trim().toLowerCase();

  useEffect(() => {
    return () => {
      setFilterValue({
        search: "",
        category: "",
        featured: "",
      });
    };
  }, [setFilterValue]);

  const filteredProducts = productsData
    .filter((product) => {
      const matchesSearch =
        !searchValue ||
        [
          product.title,
          product.price,
          product.rating.rate,
          product.category,
        ].some((value) => String(value).toLowerCase().includes(searchValue));

      const matchesCategory =
        !filterValue.category || product.category === filterValue.category;

      return matchesSearch && matchesCategory;
    })
    .sort((firstProduct, secondProduct) => {
      switch (filterValue.featured) {
        case "Price: Low → High":
          return firstProduct.price - secondProduct.price;

        case "Price: High → Low":
          return secondProduct.price - firstProduct.price;

        case "Top Rated":
          return secondProduct.rating.rate - firstProduct.rating.rate;

        case "Lowest Rated":
          return firstProduct.rating.rate - secondProduct.rating.rate;

        default:
          return 0;
      }
    });

  return (
    <div>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-7 px-4 text-white sm:px-6 lg:gap-10">
        <div className="w-full font-medium flex flex-col gap-2 mt-10">
          <h1 className="text-3xl sm:text-4xl">All Products</h1>
          <h1 className="text-zinc-600 font-semibold text-lg">
            50 products found
          </h1>
        </div>
        <SearchFilters />

        {filteredProducts.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-zinc-400">No products found.</p>
        )}
      </div>
      <div className="mt-30">
        <PageFooter />
      </div>
    </div>
  );
};

export default ShopPage;
