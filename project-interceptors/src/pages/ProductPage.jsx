import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInstance";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const getProductData = async () => {
    try {
      let res = await axiosInstance.get("/products");
      setProductData(res.data);
      setIsloading(false);
    } catch (error) {
      console.log("error is product data", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  if (isloading) {
    return (
      <div className="w-full h-full flex items-center justify-center text-4xl">
        Content is Loading....
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-5 bg-slate-950 p-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {productData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductPage;
