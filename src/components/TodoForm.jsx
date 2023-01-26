import React from "react";

const TodoForm = () => {
  return (
    <form className="flex items-center  ">
      <div className="w-full  ">
        <input
          type="text"
          placeholder="Add Todo..."
          className=" outline-none p-2 rounded-md md:w-[80%] "
        />

        <button type="submit" className="bg-red-300 p-2 rounded-md w-auto ml-2">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
