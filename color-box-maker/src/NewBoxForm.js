import React, { useState } from "react";

//CAPTURES THE USER INPUT TO CREATE A NEW BOX AND KEEPS THE FORM-RELATED LOGIC SEPERATE FROM THE BOXLIST
//ALSO DESIGNED TO BE REUSABLE AND JUST NEEDS TO PROVIDE THE NEW BOX DATA IN THE FORMAT EXPECTED
const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {//EMPTY FORM
    width: '',
    height: '',
    backgroundColor: ''
  }

  //MAKE FORM DATA STATE TO TRACK THE VALUES OF THE FORM IMPUTS
  const [formData, setFormData] = useState(INITIAL_STATE);
  
  //UPDATES FORMDATA STATE WHEN USER TYPES OR SELECTS VALUES IN FORM= HANDLES CHANGES WITH COMPUTED PROPERTY NAMES
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData, //RETURN OBJECT WITH ALL THE EXISTING DATA
      [name]: value //THEN CHANGE USING A COMPUTED PROPERTY
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //more integrated into an application's data flow
    addBox({ ...formData });//CALLS ADD ITEM FROM ShoppingList.js; could also have formData.name , formData.qty
    setFormData(INITIAL_STATE)
  }

  //HOLDS THE HTML FORM STRUCTURE AND SUBMIT
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          type="text"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="text"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          type="text"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add New Box</button>
    </form>
  );
}

export default NewBoxForm;


