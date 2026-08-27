import React, { useContext } from "react";
import { useNavigate } from "react-router";

const ProductCard = ({product}) => {

  const navigate = useNavigate();

  return (
    <div className="h-110 text-lg flex flex-col w-65 justify-between rounded-lg  p-3 bg-zinc-800">
      <div className="flex flex-col gap-2 h-60">
        <div className="flex justify-center">
        <img
          onClick={()=> navigate(`/details/${product.id}`)}
          className="h-40 object-fit"
          src={product.image}
          alt=""
        />
      </div>
      <div className=" capitalize px-2 flex flex-col gap-2 w-63">
        <h1 className="bg-zinc-700 flex w-fit text-sm text-blue-600 items-center rounded-full py-1 px-2" >{product.category} </h1>
        <h1 className="text-xl line-clamp-2 leading-7 text-zinc-300">{product.title} </h1>
        <h1 className="line-clamp-2 leading-5 text-md">{product.description} </h1>
      </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm items-center">
        <h1>⭐ { product.rating.rate } <span>({product.rating.count} reviews)</span> </h1>
        <h1 className="text-green-400 text-2xl"> $ {product.price} </h1>
      </div>
      <div>
        <button className="w-full h-11 bg-blue-900 rounded-xl">Add to Cart</button>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
