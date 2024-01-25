import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new item", function () {
  //select various pieces by queryByText & getByLabelText
  const { container, getByText, getByLabelText } = render(<BoxList />);

  const wInput = getByLabelText("Width:");
  const hInput = getByLabelText("Height:");
  const bcInput = getByLabelText("Background Color:");
  const btn = getByText("Add New Box");

  fireEvent.change(wInput, { target: { value: '5' } });
  fireEvent.change(hInput, { target: { value: '5' } });
  fireEvent.change(bcInput, { target: { value: 'green' } });

  // Submit the form
  fireEvent.click(btn);

  const addedBox = [...container.querySelectorAll('div')].find(
    (div) => div.style.width === '5em' && 
             div.style.height === '5em' && 
             div.style.backgroundColor === 'green'
             );
  expect(addedBox).toBeInTheDocument();
})


it("should remove a box", function () {
  const { container, getByText, getByLabelText, getAllByText } = render(<BoxList />);

  const wInput = getByLabelText("Width:");
  const hInput = getByLabelText("Height:");
  const bcInput = getByLabelText("Background Color:");
  const btn = getByText("Add New Box");

  fireEvent.change(wInput, { target: { value: '8' } });
  fireEvent.change(hInput, { target: { value: '5' } });
  fireEvent.change(bcInput, { target: { value: 'green' } });

  // Submit the form
  fireEvent.click(btn);

  const addedBox = [...container.querySelectorAll('div')].find(
    (div) => div.style.width === '8em' && 
             div.style.height === '5em' && 
             div.style.backgroundColor === 'green'
             );
  expect(addedBox).toBeInTheDocument();

   // Step 2: Remove the todo
   const deleteButton = addedBox.querySelector('button'); 
   fireEvent.click(deleteButton);
 
   // Step 3: Verify box is removed
   expect(addedBox).not.toBeInTheDocument();
 });