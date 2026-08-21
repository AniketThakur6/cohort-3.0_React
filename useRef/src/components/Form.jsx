import React ,{useState}from "react";

const Form = () => {

  const [formdata, setFormdata] = useState({

  })

  console.log(formdata)

  const handleChange = (e)=>{
    let {name,value} = e.target
    setFormdata({...formdata, [name]:value })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormdata({
      name:"",
      category:"",
      price:"",
      image:""
    })
  }

  return (
    <div className="flex flex-col gap-4 bg-zinc-900 p-4 rounded-xl justify-center items-center ">
      <h1 className="text-3xl">useState form handling</h1>
      <form
        onSubmit={handleSubmit}
        className="flex w-full  flex-col  p-3 gap-3 justify-center items-center "
        action=""
      >
        <input
          onChange={handleChange}
          name="name"
          value={formdata.name}
          className="bg-zinc-800 w-full p-2  rounded-lg border border-zinc-700"
          type="text"
          placeholder="Name"
        />
        <input
        onChange={handleChange}
        name="category"
        value={formdata.category}
          className="bg-zinc-800 w-full p-2 rounded-lg border border-zinc-700"
          type="text"
          placeholder="category"
        />
        <input
        onChange={handleChange}
        name="price"
        value={formdata.price}
          className="bg-zinc-800 w-full p-2 rounded-lg border border-zinc-700"
          type="number"
          placeholder="price"
        />
        <input
        onChange={handleChange}
        name="image"
        value={formdata.image}
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

export default Form;
