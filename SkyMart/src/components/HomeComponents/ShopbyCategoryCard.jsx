import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const ShopbyCategoryCard = ({category}) => {
  const {setFilterValue,toShop} = useContext(MyContext);
  return (
    <div onClick={()=>{
      setFilterValue({
        search:"",
        category : category[0],
        featured:""
      })
      toShop();
    }} className="flex h-32.5 w-full flex-col items-center justify-center rounded-2xl border border-[#2a2a2a] bg-[#121212]">
      <div className="mb-3 text-3xl"></div>

    <h3 className="text-2xl mb-1 font-medium text-main-color">Category</h3>
      <h3 className="text-[16px] font-medium text-white">{category[0]}</h3>

      <p className="mt-1 text-sm text-gray-500">{category[1]} items</p>
    </div>
  );
};

export default ShopbyCategoryCard;
