import React from "react";

const TaskCard = ({ completed, aim, index, task, setTask }) => {
  const statsChange = (index) => {
    const updateTask = task.map((elem, idx) => idx === index ? {...elem,completed:!elem.completed}:elem);

    setTask(updateTask);

    console.log(task ,"hello");
  };

  return (
    <div
      className={`flex gap-2 items-center h-10 w-full bg-zinc-700 border border-zinc-600 rounded-2xl px-2 ${completed === true ? "opacity-60" : "opacity-100"}`}
    >
      <button
        onClick={()=>{
          statsChange(index)
        }} 
        
        className={` h-5 w-5 border-2 rounded-full border-blue-700 ${completed === true ? "bg-green-700 border-green-900" : "bg-zinc-600 border-blue-700"} `}
      ></button>
      <h1 className={`text-lg capitalize ${completed === true ?"line-through":""} `}>{aim}</h1>
    </div>
  );
};

export default TaskCard;
