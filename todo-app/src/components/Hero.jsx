import React, { useState } from "react";
import TaskCard from "./TaskCard";

const Hero = ({ task, setTask }) => {
  // let [input, setInput] = useState("")

  const addTask = (e) => {
    e.preventDefault();

    if (!e.target[0].value.trim()) return;

    setTask([
      ...task,
      {
        aim: e.target[0].value,
        completed: false,
      },
    ]);

    e.target[0].value = "";
  };

  return (
    <div className="pt-4 px-2 flex flex-col min-h-99 overflow-y-auto">
      <form
        onSubmit={addTask}
        className="h-15 w-full flex justify-between items-center"
        action=""
      >
        <input
          placeholder="Enter your task"
          className="rounded-md px-3 bg-zinc-600 focus:outline-none border-2 border-zinc-700 h-[60%] w-[85%]"
          type="text"
        />
        <button
          onSubmit={addTask}
          type="submit"
          className="bg-blue-800 rounded-md h-[60%] w-[10%]"
        >
          <i className="ri-add-large-line"></i>
        </button>
      </form>
      <div className="flex flex-col gap-2 pt-3  pb-5">
        {task.map((elem, idx) => {
          if (elem.completed) return;

          return (
            <TaskCard
              key={idx}
              index={idx}
              task={task}
              setTask={setTask}
              aim={elem.aim}
              completed={elem.completed}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-2 pt-5 border-t-2 border-zinc-200 ">
        {task.map((elem, idx) => {
          if (!elem.completed) return;

          return (
            <TaskCard
              key={idx}
              index={idx}
              task={task}
              setTask={setTask}
              aim={elem.aim}
              completed={elem.completed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
