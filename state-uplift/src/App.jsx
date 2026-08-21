import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register.jsx";
import UserCard from "./components/UserCard.jsx";

const App = () => {
  const [users, setUsers] = useState([
  {
    name: "Aniket",
    password: "aniket123",
    image: "https://plus.unsplash.com/premium_photo-1734463718301-d74b7e9e46dd?w=600&auto=format&fit=crop&q=60",
  },
  {
    name: "Rahul",
    password: "rahul456",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600",
  },
  {
    name: "Priya",
    password: "priya789",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
  },
  {
    name: "Aman",
    password: "aman321",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
  },
  {
    name: "Neha",
    password: "neha654",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
  },
]);
  const [toggle, setToggle] = useState(false);

  const [view, setView] = useState(false);

  return (
    <div className="min-h-screen flex-wrap gap-5 w-full bg-black flex justify-center items-center text-amber-50">
      
      <div onClick={()=>{
        setView(prev => !prev)
      }} className="text-xl text-cyan-500 absolute top-12 right-25 bg-zinc-800 py-1 px-3 rounded-3xl" >
        {view?<i className="ri-eye-fill"></i>:<i className="ri-eye-off-fill"></i>}
      </div>
    
      {view ? (
        users.map((elem,idx)=> <UserCard key={idx} user={elem} />)
      ) : toggle ? (
        <Login setToggle={setToggle} setView={setView} />
      ) : (
        <Register setToggle={setToggle} setView={setView} users={users} setUsers={setUsers} />
      )}
    </div>
  );
};

export default App;
