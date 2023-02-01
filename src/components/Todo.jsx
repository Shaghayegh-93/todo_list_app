import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";

const Todo = ({ todo, index, onToggleTodo, onDelete, onEdit }) => {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="bg-slate-600 p-2 w-full md:w-[90%] rounded-md text-white flex items-center justify-between">
        <div
          className="flex justify-between items-center"
          onClick={onToggleTodo}
        >
          <span className="rounded-full felx items-center justify-center w-[26px] h-[26px] mr-2  border">
            {index + 1}
          </span>
          <p
            className={`text-white ${
              todo.isCompleted ? "text-white line-through" : "text-white"
            }`}
          >
            {todo.text}
          </p>
        </div>
        <div className="flex items-center   max-w-[100px] ">
          {todo.isCompleted ? (
            <BsFillCheckCircleFill className="text-green-600  " />
          ) : (
            ""
          )}
          <MdModeEditOutline className="mr-1 ml-2" onClick={onEdit} />
          <RiDeleteBin5Fill className="text-red-600 " onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
