import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "fsdf",
      email: "a@a.com",
      mobile: "9876543210",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Rahul",
      email: "rahul@gmail.com",
      mobile: "9876543211",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Ankit",
      email: "ankit@gmail.com",
      mobile: "9876543212",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Priya",
      email: "priya@gmail.com",
      mobile: "9876543213",
      image: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "Neha",
      email: "neha@gmail.com",
      mobile: "9876543214",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Rohit",
      email: "rohit@gmail.com",
      mobile: "9876543215",
      image: "https://i.pravatar.cc/150?img=6",
    },
    {
      name: "Sneha",
      email: "sneha@gmail.com",
      mobile: "9876543216",
      image: "https://i.pravatar.cc/150?img=7",
    },
    {
      name: "Aman",
      email: "aman@gmail.com",
      mobile: "9876543217",
      image: "https://i.pravatar.cc/150?img=8",
    },
    {
      name: "Karan",
      email: "karan@gmail.com",
      mobile: "9876543218",
      image: "https://i.pravatar.cc/150?img=9",
    },
    {
      name: "Pooja",
      email: "pooja@gmail.com",
      mobile: "9876543219",
      image: "https://i.pravatar.cc/150?img=10",
    },
  ]);
  const [toggle, setToggle] = useState(true);
  const [isEdit, setIsEdit] = useState(null);

  return (
    <div className="bg-black gap-6 min-h-screen w-full text-white flex flex-col p-5">
      <div>
        <Navbar setIsEdit={setIsEdit} setToggle={setToggle} />
      </div>

      {toggle ? (
        <div className="flex justify-center items-center w-full h-full grow">
          <Form users={users} setIsEdit={setIsEdit} isEdit={isEdit} setToggle={setToggle} setUsers={setUsers} />
        </div>
      ) : (
        <div className="flex ml-10 flex-wrap gap-4">
          {users.map((elem, idx) => (
            <Usercard
              key={idx}
              index={idx}
              user={elem}
              users={users}
              setIsEdit={setIsEdit}
              setUsers={setUsers}
              setToggle={setToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
