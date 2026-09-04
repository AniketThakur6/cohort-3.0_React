import { axiosInstance } from './../config/axiosInstance';


export const productApi = async () => {
  try {
    const data = await axiosInstance.get("https://dummyjson.com/products");
    console.log(data.data.products);
    return data.data.products;
  } catch (error) {
    console.log("product getting error", error);
  }
};
