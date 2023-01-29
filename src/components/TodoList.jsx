import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, toggleTodo }) => {
  console.log(todoList);
  return (
    <div className="">
      {todoList.map((todo, index) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            index={index}
            onToggleTodo={()=>toggleTodo(todo.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
