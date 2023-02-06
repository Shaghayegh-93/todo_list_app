import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, toggleTodo, onDelete, setEdit }) => {
  const renderTodo = () => {
    if (todoList.length === 0) return <div className="text-white">No tasks</div>;
    return (
      <div className="task-list">
        {todoList.map((todo, index) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              index={index}
              onToggleTodo={() => toggleTodo(todo.id)}
              onDelete={() => onDelete(todo.id)}
              onEdit={() => setEdit(todo)}
            />
          );
        })}
      </div>
    );
  };

  return <div className="">{renderTodo()}</div>;
};

export default TodoList;
