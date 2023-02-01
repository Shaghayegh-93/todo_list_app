import "./App.css";
import { toast, Toaster } from "react-hot-toast";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [edit, setEdit] = useState({
    id: null,
    text: "",
    isCompleted: false,
  });

  const changeHandler = (e) => {
    setTodoInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!todoInput) {
      toast.success("hiiii");
      return;
    }
    addTodoHandler(todoInput);
    setTodoInput("");
  };

  const addTodoHandler = (todo) => {
    // if (edit.id) {
    //   const index = todoList.findIndex((todo) => todo.id === id);
    //   const selectedTodo = { ...todoList[index] };
    //   todo.text = selectedTodo.text;
    //   const updatedTodo = [...todoList];
    //   updatedTodo[index] = selectedTodo;
    //   setTodoList(updatedTodo);
    // }
    const newTodo = {
      text: todo,
      id: Math.floor(Math.random() * 1000),
      isCompleted: false,
    };

    setTodoList([...todoList, newTodo]);
  };
  const toggleTodo = (id) => {
    const index = todoList.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todoList[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodo = [...todoList];
    updatedTodo[index] = selectedTodo;
    setTodoList(updatedTodo);
  };

  const onDelete = (id) => {
    const filteredTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredTodo);
  };

  return (
    <div className=" bg-slate-800 h-screen  w-full">
      <div className="  text-center max-w-[900px]   h-full m-auto p-4">
        <Toaster position="top-right" />
        <h1 className="text-white  text-3xl mb-9">Todo List App</h1>
        <TodoForm
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          todoInput={todoInput}
        />
        <TodoList
          todoList={todoList}
          toggleTodo={toggleTodo}
          onDelete={onDelete}
          setEdit={setEdit}
        />
      </div>
    </div>
  );
}

export default App;
