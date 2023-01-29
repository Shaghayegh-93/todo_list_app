import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, toggleTodo, onDelete }) => {
  console.log(todoList);
  return (
    <div className="">
      {todoList.map((todo, index) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            index={index}
            onToggleTodo={() => toggleTodo(todo.id)}
            onDelete={() => onDelete(todo.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
