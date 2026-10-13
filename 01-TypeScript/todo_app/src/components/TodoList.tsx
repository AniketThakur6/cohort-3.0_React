import React from "react";
import type { Todo } from "../model";
import TodoCard from "./TodoCard";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="mt-10 flex flex-col gap-3 sm:grid sm:grid-cols-3">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
