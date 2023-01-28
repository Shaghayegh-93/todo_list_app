import React from "react";

const TodoForm = () => {
  return (
    <form className="">
      <div className=" grid grid-cols-4 md:w-[90%]  m-auto  mb-4">
        <input
          type="text"
          placeholder="Add Todo..."
          className=" outline-none p-2 rounded-md col-span-3  "
        />

        <button type="submit" className="bg-red-300 p-2 rounded-md w-auto ml-4 col-span-1 ">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
