import React, { useState } from "react";
import type { Todo } from "../model";
import {
  CircleCheckBig,
  HelpCircle,
  Pencil,
  Save,
  Trash,
  Trash2,
} from "lucide-react";

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard: React.FC<Props> = ({ todo, setTodos }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number): void => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const edit = () => {
    setIsEdit((prev) => !prev);
  };

  const handelEdit = (id: number) => {
    if (!editTodo.trim()) return;

    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo,
      ),
    );
    edit();
  };

  return (
    <div className="bg-zinc-800 flex gap-5 items-center px-3 sm:py-5 py-3 justify-between border border-zinc-700 w-full min-w-90 rounded-xl text-white">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handelEdit(todo.id);
        }}
        className="flex-1 text-xl"
      >
        {!isEdit ? (
          <span
            className={`block wrap-anywhere select-none ${todo.isDone ? "line-through text-zinc-400" : null}`}
          >
            {todo.todo}
          </span>
        ) : (
          <input
            autoFocus
            className="bg-zinc-100 text-black px-1 rounded"
            onChange={(e) => setEditTodo(e.target.value)}
            value={editTodo}
            type="text"
          />
        )}
      </form>
      <div className="flex gap-4">
        {!isEdit ? (
          !todo.isDone ? (
            <Pencil
              size={20}
              className="text-yellow-600 hover:text-yellow-400 transition-colors"
              onClick={edit}
            />
          ) : null
        ) : (
          <Save
            size={20}
            className="text-green-500 hover:text-green-400 transition-colors"
            onClick={() => handelEdit(todo.id)}
          />
        )}
        <CircleCheckBig
          className={
            todo.isDone
              ? "text-green-500 hover:text-green-400 transition-colors"
              : "text-cyan-500 hover:text-cyan-400 transition-colors"
          }
          size={20}
          onClick={() => handleDone(todo.id)}
        />
        <Trash2
          size={20}
          className="text-red-500 hover:text-red-400 transition-colors"
          onClick={() => handleDelete(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoCard;
