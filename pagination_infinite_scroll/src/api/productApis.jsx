import { api } from "../config/apis";

export const getProductNormal = async ({limit,skip}) => {
  try {
    let res = await api.get(`/products?limit=${limit}&skip=${skip}`);
    return res.data;
  } catch (error) {
    console.log("error in normal get product api", error);
    throw error;
  }
};


export const getInfiniteScrolling = async (limit,pageParam = 0) =>{
  try {
    let res = await api.get(`/products?limit=${limit}&skip=${pageParam}`)
    return res.data;
  } catch (error) {
    console.log(error)
  }
}