import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList }) => {
  console.log(todoList)
  return (
    <div className="">
      {todoList.map((todo,index) => {
        return <Todo  todo={todo} key={todo.id} index={index} />;
      })}
    </div>
  );
};

export default TodoList;
