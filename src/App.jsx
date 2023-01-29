import "./App.css";
import { Toaster } from "react-hot-toast";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (todo) => {
    const newTodo = {
      text: todo,
      id: Math.floor(Math.random() * 1000),
      isCompleted: false,
    };

    setTodoList([...todoList, newTodo]);
    console.log("todoList:", todoList);
  };
  const toggleTodo = (id) => {
    const index = todoList.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todoList[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodo = [...todoList];
    updatedTodo[index] = selectedTodo;
    setTodoList(updatedTodo);
  };

  return (
    <div className=" bg-slate-800 h-screen  w-full">
      <div className="  text-center max-w-[900px]   h-full m-auto p-4">
        <Toaster position="top-right" />
        <h1 className="text-white  text-3xl mb-9">Todo List App</h1>
        <TodoForm addTodoHandler={addTodoHandler} />
        <TodoList todoList={todoList} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
}

export default App;
