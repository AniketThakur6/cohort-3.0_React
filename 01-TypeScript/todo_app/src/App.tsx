import React, { useState } from "react";
import InputField from "./components/InputField";
import type { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([{id:1791900275317,todo:"hjgdhjsdfhjsffdsfsd",isDone:false}]);

  const handleAdd = (e:React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!todo.trim()) return;

    setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    setTodo("");
  };

  console.log(todo);

  return (
    <div className="App">
      <span className="text-3xl text-white my-10 text-center sm:my-15">
        Taskify
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
