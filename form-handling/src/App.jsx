import React, { useState } from "react";

const App = () => {

  // const [name, setName] = useState("")
  // const [email,setEmail] = useState("")
  // const [age,setAge] =useState(0)

  const [formdata,setFormdata] = useState({
    name:"",
    email:"",
    password:""
  })



  const update = (e)=>{
    let {name, value} = e.target;
     setFormdata({...formdata,[name]:value})
  }

  return (
    <div className="h-screen gap-20 text-2xl text-amber-50 w-full flex flex-col pl-20 justify-center bg-black">
      <form onChange={(e)=>{
        update(e)
      }} className="flex flex-col w-100 gap-5" action="">
        <input name="name" className="bg-zinc-800 p-2 " type="text" placeholder="name" />
        <input name="email" className="bg-zinc-800 p-2 " type="email" placeholder="email" />
        <input name="password" className="bg-zinc-800 p-2 " type="text" placeholder="password" />
      </form>

      <div className="flex flex-col gap-5" >
        <h1>Name - {formdata.name}</h1>
        <h1>Email - {formdata.email}</h1>
        <h1>password - {formdata.password}</h1>
      </div>
    </div>
  );
};

export default App;
