import { api } from './../../../config/api';

export const getAllProducts =async (search) => {
  try {
    let url = search ? `/products/search?q=${search}` : `/products?limit=100`

    let res = await api.get(url);
    return res.data ;
  } catch (error) {
    console.log("error in  getting products", error);
    return { products: [] };
  }
}


export const getProductCategories =async () =>{
  try {
    let res = await api.get(`/products/categories`);
    return res.data 
  } catch (error) {
  console.log("error in getting product categories", error)    
    return { products: [] };
}
}

export const getProductByCategories = async(categories)=>{
  try {
    if(!categories) return 0;
    let res = await api.get(`/products/category/${categories}`)
   
    return res.data 
  } catch (error) {
  console.log("error in gettting products by categories",error);    z
  return { products: [] };
}
}