import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";

const Todo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-slate-600 p-2 w-full md:w-[90%] rounded-md text-white flex items-center justify-between">
        <div className="flex justify-between items-center">
          <span className="rounded-full felx items-center justify-center w-[26px] h-[26px] mr-2  border">
            1
          </span>
          <p>task 1</p>
        </div>
        <div className="flex">
          <BsFillCheckCircleFill />
          <MdModeEditOutline />
          <RiDeleteBin5Fill />
        </div>
      </div>
    </div>
  );
};

export default Todo;
