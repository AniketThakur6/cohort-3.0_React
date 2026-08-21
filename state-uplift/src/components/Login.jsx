import React, {useState} from "react";

const Login = ({ setToggle,setView }) => {


const [formdata, setFormdata] = useState({
  name:"",password:""
})

  const handleChange = (e)=>{
    let { name,value} = e.target
      setFormdata({...formdata,[name]:value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setFormdata({name:"",password:""})
    setView(prev => !prev)
  }

  return (
    <div className="text-xl flex flex-col gap-5 p-5 w-100 bg-zinc-900 rounded-lg border-2 border-zinc-800">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 " action="">
        <h1 className="text-2xl">Login</h1>
        <input
        onChange={handleChange}
        name="name"
        value={formdata.name}
          className="rounded mt-4 p-2 bg-zinc-800 border-2 border-zinc-700"
          type="text"
          placeholder="Name"
        />
        <input
        onChange={handleChange}
        name="password"
        value={formdata.password}
        className="rounded p-2 bg-zinc-800 border-2 border-zinc-700"
          type="text"
          placeholder="password"
        />
        <button type="submit" className="rounded p-2 bg-blue-700">Login</button>
      </form>
      <p>
        Didn't have an Account?{" "}
        <span onClick={()=>{
          setToggle(prev => !prev )
        }} className="text-blue-700">Register here</span>
      </p>
    </div>
  );
};

export default Login;
