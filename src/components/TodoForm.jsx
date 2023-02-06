import React from "react";

const TodoForm = ({ changeHandler, submitHandler, todoInput, edit }) => {
  return (
    <form onSubmit={submitHandler} className="">
      <todo div className=" grid grid-cols-3  md:w-[90%]  m-auto  mb-4 md:grid-cols-5">
        <input
          type="text"
          placeholder="Add Todo..."
          className=" outline-none p-2 rounded-md col-span-2 md:col-span-3 "
          value={todoInput}
          onChange={changeHandler}
        />
        <div className="flex col-span-1 w-full md:col-span-2">
          <button
            type="submit"
            className={
              edit.id
                ? "bg-yellow-400 p-2 rounded-md w-full ml-4  text-white "
                : "bg-green-700 p-2 rounded-md w-full  ml-4  text-white "
            }
          >
            {edit.id ? "Edit" : " Add task"}
          </button>
          <select
            className="hidden md:inline-block bg-green-700 p-2 rounded-md  ml-4  text-white w-auto "
            name=""
            id=""
          >
            <option value="select">select</option>
            <option value="completed">completed</option>
            <option value="deleted">deleted</option>
          </select>
        </div>
      </todo>
    </form>
  );
};

export default TodoForm;
