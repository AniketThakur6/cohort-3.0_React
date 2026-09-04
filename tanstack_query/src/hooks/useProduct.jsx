import { useQuery } from "@tanstack/react-query";
import { productApi } from "../api/productApi";
import { useState } from "react";

export const useProducts = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: productApi,
    staleTime: 5000,
  });

  console.log(data);

  const [filterValue, setFilterValue] = useState({
    search: "",
    category: "",
    featured: "",
  });

  const handleChange = (e) => {
    console.log("searching...")
    let { name, value } = e.target;
    setFilterValue({ ...filterValue, [name]: value });
  };

  const clear = (key) => {
    console.log(key);
    setFilterValue({ ...filterValue, [key]: "" });
  };

  const clearAll = () => {
    setFilterValue({
      search: "",
      category: "",
      featured: "",
    });
  };

  let searchValue = filterValue.search.toLowerCase();

  const filterData = data
    ?.filter((product) => {
      console.log("hjgfhsdgh")
      const matchsSearch =
        !searchValue ||
        [product.title, product.category, product.brand, product.rating]
        .some((val) => String(val).toLowerCase().includes(searchValue));

      const matchCategory =
        !filterValue.category || product.category === filterValue.category;

      return matchsSearch && matchCategory;
    })
    .sort((firstProduct, secondProduct) => {
      switch (filterValue.featured) {
        case "Price: Low → High":
          return firstProduct.price - secondProduct.price;

        case "Price: High → Low":
          return secondProduct.price - firstProduct.price;

        case "Top Rated":
          return secondProduct.rating - firstProduct.rating;

        case "Lowest Rated":
          return firstProduct.rating - secondProduct.rating;

        default:
          return 0;
      }
    });

  return {
    isPending,
    error,
    handleChange,
    clear,
    filterValue,
    clearAll,
    filterData,
  };
};
