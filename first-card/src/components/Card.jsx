import React from "react";

const Card = ({ product,del }) => {
  return (
    <div className="flex gap-5 justify-between flex-col p-3 rounded-xl h-100 w-60 bg-cyan-800 border-2 border-cyan-600">
      <div>
        <img
          className="w-full h-50 object-fill rounded-xl"
          src={product.image}
          alt=""
        />
      </div>

      <div className="text-2xl leading-8 w-full [&_h3]:truncate capitalize">
        <h3>{product.title}</h3>
        <h3>{product.category}</h3>
        <h3>
          $ <span className="text-green-500">{product.price}</span>
        </h3>
      </div>

      <button onClick={()=>del(product)} className="px-4 py-1 text-xl rounded-lg border-2 border-rose-600 bg-red-800">
        Delete
      </button>
    </div>
  );
};

export default Card;
