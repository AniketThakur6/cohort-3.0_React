import React from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  console.log("RHF rendering....");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col w-85 gap-4 bg-zinc-900 p-4 rounded-xl justify-center items-center ">
      <h1 className="text-3xl">React hook form</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex w-full  flex-col  p-3 gap-3 justify-center items-center "
        action=""
      >
        <input
          {...register("name")}
          className="bg-zinc-800 w-full p-2  rounded-lg border border-zinc-700"
          type="text"
          placeholder="Name"
        />
        <input
          {...register("category")}
          className="bg-zinc-800 w-full p-2 rounded-lg border border-zinc-700"
          type="text"
          placeholder="category"
        />
        <input
          {...register("price")}
          className="bg-zinc-800 w-full p-2 rounded-lg border border-zinc-700"
          type="number"
          placeholder="price"
        />
        <input
          {...register("image")}
          className="bg-zinc-800 w-full p-2 rounded-lg border border-zinc-700"
          type="text"
          placeholder="image"
        />
        <button className="bg-blue-700 w-full py-2 rounded" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RHF;
