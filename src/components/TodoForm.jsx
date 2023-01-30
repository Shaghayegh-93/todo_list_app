import React, { useState } from "react";
import { toast } from "react-hot-toast";

const TodoForm = ({ addTodoHandler,edit,setEdit }) => {
  const [todoInput, setTodoInput] = useState("");
  const changeHandler = (e) => {
    setTodoInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!todoInput) {
      toast.success("hiiii");
      return;
    }
    addTodoHandler(todoInput);
    setTodoInput("");
  };
  return (
    <form onSubmit={submitHandler} className="">
      <div className=" grid grid-cols-4 md:w-[90%]  m-auto  mb-4">
        
        <input
          type="text"
          placeholder="Add Todo..."
          className=" outline-none p-2 rounded-md col-span-3  "
          value={todoInput}
          onChange={changeHandler}
        />

        <button
          type="submit"
          className="bg-green-700 p-2 rounded-md w-auto ml-4 col-span-1 text-white "
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
