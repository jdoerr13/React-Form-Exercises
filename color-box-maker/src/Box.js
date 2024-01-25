import React from "react";


//Accepts width, height, backgroundColor, and a removeBox function as props.
//Renders a div styled with the provided dimensions and background color.
//Includes a button labeled “X” that calls the removeBox function when clicked.

//DON'T NEED STATE: DESCTRUTURE THE PROPS
const Box = ({ id, width, height, backgroundColor, removeBox }) => {
//avoid creating a new object on every render inside JSX
const style = {
  width: `${width}em`,
  height: `${height}em`,
  backgroundColor
};

return (
  <div style={style}>
    <button onClick={removeBox}>X</button>
  </div>
);
}

export default Box;


