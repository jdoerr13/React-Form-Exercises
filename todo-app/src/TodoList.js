import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';//provides a function to get a random id
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm";

//PARENT COMPONENT THAT WILL HOLD THE STATE: OR container component that manages the state of the shopping list and coordinates the addition of new items through the NewItemForm component.


const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const newTodo = { id: uuidv4(), task };// this is better with a string bc it is very unlikely to be an object
    setTodos(todos => [...todos, newTodo]);
  };
  

  const removeTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newTask) => {
    setTodos(todos => todos.map(todo =>
      todo.id === id ? { ...todo, task: newTask } : todo
    ));
  };

  return (
    <div>
      <h3>Task List</h3>
      <NewTodoForm addTodo={addTodo} />
      <div>
        {todos.map((todo) => 
        <Todo 
        key={todo.id}
        id={todo.id}
        task={todo.task}
        removeTodo={removeTodo}
        editTodo={editTodo}
        />)}
      </div>

    </div>
  )

}

export default TodoList;


