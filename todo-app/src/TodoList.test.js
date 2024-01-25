import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new task", function () {
  //select various pieces by queryByText & getByLabelText
  const { queryByText, getByPlaceholderText } = render(<TodoList />);
  const input = getByPlaceholderText("New task");
  const btn = queryByText("Add Todo");
  expect(queryByText('Chocolate Milk')).not.toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'Chocolate Milk' } });//want input to change
  fireEvent.click(btn);//wee need this to submit the form
  expect(queryByText('Chocolate Milk')).toBeInTheDocument();
})


it("should remove a todo", function () {
  const { queryByText, getByPlaceholderText, getByText } = render(<TodoList />);
  
  // First, add a todo
  const input = getByPlaceholderText("New task");
  const addButton = queryByText("Add Todo");
  fireEvent.change(input, { target: { value: 'Chocolate Milk' } });
  fireEvent.click(addButton);

   // Verify todo is added
   expect(queryByText('Chocolate Milk')).toBeInTheDocument();

   // Step 2: Remove the todo
   const deleteButton = getByText('X'); // Assuming 'X' is the text on your delete button
   fireEvent.click(deleteButton);
 
   // Step 3: Verify todo is removed
   expect(queryByText('Chocolate Milk')).not.toBeInTheDocument();
 });