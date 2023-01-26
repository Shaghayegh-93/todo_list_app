import "./App.css";
import toast, { Toaster } from "react-hot-toast";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className=" bg-slate-800 h-screen  w-full">
      <div className="  text-center max-w-[900px]   h-full m-auto p-4">
        <Toaster position="top-right" />
        <h1 className="text-white  text-3xl mb-9">Todo List App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
