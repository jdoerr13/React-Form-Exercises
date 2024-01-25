import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';//provides a function to get a random id
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";

//PARENT COMPONENT THAT WILL HOLD THE STATE: OR container component that manages the state of the shopping list and coordinates the addition of new items through the NewItemForm component.

//MANAGES THE OVERALL LIST OF BOXES- ADD & REMOVE AND CHILD COMPONENETS
const BoxList = () => {
//no innitial state?
const INITIAL_STATE = [
  { id: uuidv4(), width: 5, height: 5, backgroundColor: 'red' },
  { id: uuidv4(), width: 7, height: 4, backgroundColor: 'blue' }
];
  const [boxes, setBoxes] = useState(INITIAL_STATE);

  //will no longer just receive name and quantity= newItem is the object from ..formData. therefore it is just a PARAMETER
  const addBox = (boxData) => {
    // Create a new box with a unique ID and the rest of the boxData
    const newBox = { ...boxData, id: uuidv4() };
    setBoxes((boxes) => [...boxes, newBox]);
  };

  const removeBox = (id) => {
    // Filter out the box with the matching ID
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map((box) => (
        <Box
          key={box.id}
          id={box.id}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
          removeBox={() => removeBox(box.id)}
        />
      ))}
    </div>
  );
}

export default BoxList;


