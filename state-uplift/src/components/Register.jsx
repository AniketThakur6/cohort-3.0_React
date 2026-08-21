import React, { useState } from "react";

const Register = ({ setToggle, users, setUsers ,setView }) => {
  const [formdata, setFormdata] = useState({
    name: "",
    password: "",
    image: "",
  });

  // console.log(formdata);
  // console.log(users);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formdata]);
    setFormdata({ name: "", password: "", image: "" });
    setView(prev => !prev)
  };

  return (
    <div className="text-xl flex flex-col gap-5 p-5 w-100 bg-zinc-900 rounded-lg border-2 border-zinc-800">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 " action="">
        <h1 className="text-2xl">Register</h1>
        <input
          name="name"
          value={formdata.name}
          onChange={handleChange}
          className="rounded mt-4 p-2 bg-zinc-800 border-2 border-zinc-700"
          type="text"
          placeholder="Name"
          required
        />
        <input
          name="password"
          value={formdata.password}
          onChange={handleChange}
          className="rounded p-2 bg-zinc-800 border-2 border-zinc-700"
          type="password"
          placeholder="password"
          required
        />
        <input
          name="image"
          value={formdata.image}
          onChange={handleChange}
          className="rounded p-2 bg-zinc-800 border-2 border-zinc-700"
          type="url"
          placeholder="Image"
          required
        />
        <button type="submit" className="rounded p-2 bg-blue-700">Register</button>
      </form>
      <p>
        Already have an Account?
        <span
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          className="text-blue-700"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
