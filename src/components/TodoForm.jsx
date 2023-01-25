import React from "react";

const TodoForm = () => {
  return (
    <form>
      <div>
        <input type="text" placeholder="Add Todo..." />
        <div>
          <button>Update</button>
          <button>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
