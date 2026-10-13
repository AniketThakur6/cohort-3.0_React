import React from "react";

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.SubmitEvent<HTMLFormElement>) => void;
};

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form
      onSubmit={handleAdd}
      className="relative w-full max-w-xs sm:max-w-xl"
    >
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        className="px-5 w-full max-w-xs sm:max-w-xl outline-blue-700 py-3 sm:text-2xl text-xl border-none rounded-full bg-white text-zinc-700"
        type="text"
        placeholder="Enter Your Task"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 active:scale-90 transition-all ease-linear absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-xl font-medium"
      >
        Create
      </button>
    </form>
  );
};

export default InputField;
