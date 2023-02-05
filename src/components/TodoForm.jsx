import React from "react";

const TodoForm = ({ changeHandler, submitHandler, todoInput, edit }) => {
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
          className={
            edit.id
              ? "bg-yellow-400 p-2 rounded-md w-auto ml-4 col-span-1 text-white"
              : "bg-green-700 p-2 rounded-md w-auto ml-4 col-span-1 text-white"
          }
        >
          {edit.id ? "Edit" : " Add Task"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
