import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";
import axios from "axios";
import ProductCard from "./../components/ProductCard";

const Home = () => {
  const { setProductsData, productsData } = useContext(MyContext);

  const getAllData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log(`error in getting all product data`, error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="flex gap-4 flex-wrap">
      {productsData.map((elem) => (
        <ProductCard key={elem.id} product={elem} />
      ))}
    </div>
  );
};

export default Home;
