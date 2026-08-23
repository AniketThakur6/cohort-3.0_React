import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";

const App = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );
  const [toggle, setToggle] = useState(false);
  const [isEdit, setIsEdit] = useState(null);

  const deleteUser = (id) => {
    let deleteUser = users.filter((elem) => elem.id !== id);
    setUsers(deleteUser);
    localStorage.setItem("users", JSON.stringify(deleteUser));
  };

  return (
    <div className="bg-black gap-6 min-h-screen w-full text-white flex flex-col p-5">
      <div>
        <Navbar setIsEdit={setIsEdit} toggle={toggle} setToggle={setToggle} />
      </div>

      {toggle ? (
        <div className="flex justify-center items-center w-full h-full grow">
          <Form
            users={users}
            setIsEdit={setIsEdit}
            isEdit={isEdit}
            setToggle={setToggle}
            setUsers={setUsers}
          />
        </div>
      ) : (
        <div className="flex ml-10 flex-wrap gap-4">
          {users.map((elem, idx) => (
            <Usercard
              key={elem.id}
              user={elem}
              setIsEdit={setIsEdit}
              setToggle={setToggle}
              deleteUser={deleteUser}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
