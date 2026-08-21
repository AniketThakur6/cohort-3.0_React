import React, { useRef, useState } from "react";

const FormuseRef = () => {
  console.log("form rendering....");
  const [formdata, setFormdata] = useState({});
  console.log("this is product --> ", formdata);

  const intRef = useRef({});
  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      pName: intRef.current.name.value,
      category: intRef.current.category.value,
      price: intRef.current.price.value,
      image: intRef.current.image.value,
    };
    setFormdata(obj);

    intRef.current.name.value = "";
    intRef.current.category.value = "";
    intRef.current.price.value = "";
    intRef.current.image.value = "";
  };

  return (
    <div className="flex flex-col w-85 gap-4 bg-zinc-900 p-4 rounded-xl justify-center items-center ">
      <h1 className="text-3xl">useRef form handling</h1>
      <form
        onSubmit={handleSubmit}
        className="flex w-full  flex-col  p-3 gap-3 justify-center items-center "
        action=""
      >
        <input
          ref={(e) => {
            if (e) intRef.current[e.name] = e;
          }}
          name="name"
          className="bg-zinc-800 w-full p-2  rounded-lg border border-zinc-700"
          type="text"
          placeholder="Name"
        />
        <input
          ref={(e) => {
            if (e) intRef.current[e.name] = e;
          }}
          name="category"
          className="bg-zinc-800 w-full p-2 rounded-lg border border-zinc-700"
          type="text"
          placeholder="category"
        />
        <input
          ref={(e) => {
            if (e) intRef.current[e.name] = e;
          }}
          name="price"
          className="bg-zinc-800 w-full p-2 rounded-lg border border-zinc-700"
          type="number"
          placeholder="price"
        />
        <input
          ref={(e) => {
            if (e)
              // this is needed becaz at the time of rendering react reassign Ref of a particular component during that peroid it become null
              intRef.current[e.name] = e;
          }}
          name="image"
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

export default FormuseRef;
