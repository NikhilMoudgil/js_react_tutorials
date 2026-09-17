import React from "react";
import { useState } from "react";
function AddTodo() {
  const [input, setTodo] = useState("");
  const dispatch = useDispatch(); // it used reducer to do changes in the state
  const add = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setTodo(""); // to clear the input field after adding the todo
  };
  return (
    <form
      onSubmit={addTodoHandeler}
      className="flex items-center justify-center gap-2"
    >
      <input
        type="text"
        placeholder="Enter A Todo"
        className="border-2 border-gray-400 rounded-md px-2 py-1"
        value={input}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
