import React from 'react'
import {useState} from 'react';

const CreatePage = () => {
    const  [inputValue, setInputValue] =  useState('');

	const  handleChange = (event) => {
		setInputValue(event.target.value);
	};

    var newGuid = uuidv4();

    var jsonData = {
    "id": {newGuid},
    "title": "Potato Soup",
    "description": "Soup made from Potatoes",
    "logo": null,
    "createdDate": "2024-07-29T21:35:08.4886823+00:00",
    "ingredients": [
        {
            "recipeId": {newGuid},
            "ordinalPosition": 0,
            "unit": "lbs",
            "quantity": 20,
            "ingredient": "Potatoes"
        },
        {
            "recipeId": {newGuid},
            "ordinalPosition": 1,
            "unit": "lbs",
            "quantity": 0.25,
            "ingredient": "Sugar"
        }
    ],
    "instructions": [
        {
            "recipeId": {newGuid},
            "ordinalPosition": 0,
            "instruction": "Wash Potatoes well"
        },
        {
            "recipeId": {newGuid},
            "ordinalPosition": 1,
            "instruction": "Boil Potatoes till tender"
        }
    ]
}

  function handleClick() {
    
    console.log("Send Data to Api");

    try{
        // Send data to the backend via POST
        fetch('https://localhost:5401/api/recipe', {  // Enter your IP address here

        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

        })
    }
    catch(error){
        console.error(error);
    }
  }

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, 
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

return  (
<form>
	<label>Input Value:
	<input  type="text"  value={inputValue} onChange={handleChange} />
	</label>
	<p>Input Value: {inputValue}</p>
    <div onClick={handleClick} style={{
      textAlign: 'center',
      width: '100px',
      border: '1px solid gray',
      borderRadius: '5px'
    }}>
      Send data to backend
    </div>
</form>
  );
}

export default CreatePage