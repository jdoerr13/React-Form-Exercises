import React, {useState} from "react";
//Each Todo component is responsible for its own display and edit state. By encapsulating the edit form and logic within the Todo component, it manages its own state and behavior (whether it's being edited or just displayed). This makes the Todo component self-contained.
const Todo = ({ id, task, removeTodo, editTodo }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleEdit = (e) => {
    e.preventDefault();
    editTodo(id, editTask);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleEdit}>
        <input
          type="text"
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
        />
        <button type="submit">Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    );
  }

  return (
    <div>
      <span>{task}</span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => removeTodo(id)}>X</button>
    </div>
  );
}

export default Todo;


