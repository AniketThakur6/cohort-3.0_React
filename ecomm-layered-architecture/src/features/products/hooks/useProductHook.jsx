import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getProductByCategories, getProductCategories } from "../api/productApis";
import { useEffect, useState } from "react";

export const useAllProducts = () => {
  const [search, setSearch] = useState("");
  const [debounce,setDebounce] = useState(null)

// console.log("hookes")

  useEffect(()=>{
    let timeout = setTimeout(()=>{
      setDebounce(search)
    },1000)

    return ()=> clearTimeout(timeout); 
  },[search])


  const { data, isPending, error } = useQuery({
    queryKey: ["products",debounce],
    queryFn: () => getAllProducts(debounce),
  });

  return {
    data,
    isPending,
    error,
    search,
    setSearch,
  };
};

export const productCategories = () =>{
  return useQuery({
    queryKey:['productCategories'],
    queryFn:getProductCategories,
  })
}

export const categoriesByProducts = () =>{

  const [categories, setCategories] = useState("")  

  const {data,isPending,error} = useQuery({
    queryKey:["byCategories",categories],
    queryFn:()=> getProductByCategories(categories),
  })

  return {
    data,
    isPending,
    error,
    categories,
    setCategories,
  }
}