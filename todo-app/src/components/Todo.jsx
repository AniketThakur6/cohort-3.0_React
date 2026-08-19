import React ,{ useState }from "react";
import Header from "./Header";
import Hero from "./Hero";
const Todo = ()=>{

   const [task,setTask] = useState([])

  return(
    <div className= "p-5 bg-zinc-800 rounded-2xl border-2 border-zinc-600 h-130 w-110">
      <Header   />
      <Hero task={task} setTask={setTask} />
    </div>
  )
}

export default Todo;