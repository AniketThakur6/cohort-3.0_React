import React from "react";

const TaskCard = ({ completed, aim, index, task, setTask }) => {
  const statsChange = (index) => {
    const updateTask = task.map((elem, idx) =>
      idx === index ? { ...elem, completed: !elem.completed } : elem,
    );

    setTask(updateTask);
  };

  const deleteTask = (index)=>{
    let updateTask = task.filter((_,idx)=> idx !== index)
    setTask(updateTask);
  }

  return (
    <div
      className={`flex gap-2 items-center justify-between h-10 w-full bg-zinc-700 border border-zinc-600 rounded-2xl px-2 ${completed === true ? "opacity-60" : "opacity-100"}`}
    >
      <div className="flex gap-2 w-84 items-center">
        <button
          onClick={() => {
            statsChange(index);
          }}
          className={` h-5 w-5 shrink-0 border-2 rounded-full border-blue-700 ${completed === true ? "bg-green-700 border-green-900" : "bg-zinc-600 border-blue-700"} `}
        ></button>
        <h1
          className={`text-lg truncate capitalize ${completed === true ? "line-through" : ""} `}
        >
          {aim}
        </h1>
      </div>

      <button onClick={()=>{
        deleteTask(index)
      }} className="text-red-600 text-xl ">
        <i className="ri-delete-bin-line"></i>
      </button>
    </div>
  );
};

export default TaskCard;
