import React, { useState } from "react";

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return; // Prevent adding empty tasks
    addTodo(task);
    setTask('');
  };

  //handleChange is not needed here bc we only have one input= task
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;


