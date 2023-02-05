import React, { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
  useEffect(() => {
    edit.id ? setTodoInput(edit.text) : setTodoInput("");
  }, [edit]);

  const changeHandler = (e) => {
    setTodoInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // if (!todoInput) {
    //   toast.success("hiiii");
    //   return;
    // }
    if (edit.id) {
      const index = todoList.findIndex((todo) => todo.id === edit.id);
      const selectedTodo = { ...todoList[index] };
      selectedTodo.text = todoInput;
      const updatedTodo = [...todoList];
      updatedTodo[index] = selectedTodo;
      setTodoList(updatedTodo);
      setEdit({id:null,text:""})
      return;
    }else
    addTodoHandler(todoInput);
    setTodoInput("");
  };
  const addTodoHandler = (todo) => {
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

  // const onUpdateTodo = (id, newValue) => {
  //   const index = todoList.findIndex((todo) => todo.id === id);
  //   const selectedTodo = { ...todoList[index] };
  //   selectedTodo.text = newValue;
  //   const updatedTodo = [...todoList];
  //   updatedTodo[index] = selectedTodo;
  //   setTodoList(updatedTodo);
  // };

  return (
    <div className=" bg-slate-800 h-screen  w-full">
      <div className="  text-center max-w-[900px]   h-full m-auto p-4">
        <Toaster position="top-right" />
        <h1 className="text-white  text-3xl mb-9">Todo List App</h1>
        <TodoForm
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          todoInput={todoInput}
          edit={edit}
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
};

export default TodoApp;
