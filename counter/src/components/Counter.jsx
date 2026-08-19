import {React,useState } from "react";
import "remixicon/fonts/remixicon.css";
const Counter = () => {
  let [count, setCount] = useState(0);

  return (
    <div className="rounded-lg flex flex-col justify-center text-2xl items-center gap-10 bg-zinc-900 h-100 w-160 ">
      <h1 className="text-5xl">Counetr App</h1>
      <h1 className="text-3xl">
        count - <span className="text-green-600 font-bold">{count}</span>
      </h1>
      <div className="flex justify-between gap-10 p-5">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="p-2 rounded-2xl border border-amber-100 px-5 bg-zinc-700"
        >
          <i className="ri-add-large-line"></i> Increment
        </button>
        <button onClick={()=>{
          setCount(count-1)
        }} className="p-2 rounded-2xl border border-amber-100 px-5 bg-zinc-700">
          <i className="ri-subtract-fill"></i> Decrement
        </button>
        <button onClick={()=>{
          setCount(0)
        }} className="p-2 rounded-2xl border border-amber-100 px-5 bg-zinc-700">
          <i className="ri-reset-right-fill"></i> Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
