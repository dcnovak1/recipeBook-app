import React from 'react'
import {useState} from 'react';

class RecipeToSave{
    constructor(id, title, description, ingredients, instructions){
        this.id = id;
        this.title = title;
        this.description = description;
        this.logo = null;
        this.createdDate = "2024-07-29T21:35:08.4886823+00:00";
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}

class Ingredient{
    constructor(recipeId, ordinalPosition, unit, quantity, ingredient){
        this.recipeId = recipeId;
        this.ordinalPosition = ordinalPosition;
        this.unit = unit;
        this.quantity=quantity;
        this.ingredient= ingredient;
    }


}

class Instruction{
    constructor(recipeId, ordinalPosition, instruction){
        this.recipeId = recipeId;
        this.ordinalPosition = ordinalPosition;
        this.instruction = instruction;
    }
}

const CreatePage = () => {

    //var [ingredients, setIngredients] = useState([new Ingredient()]);
    var [title, setTitle] = useState("");
    var [description, setDescription] = useState("");
    var [units, setUnits] = useState("");
    var [quantity, setQuantity] = useState(0);
    var [ingredient, setIngredient] = useState("");
    var [instructions, setInstructions] = useState("");

    const  handleSubmit = (event) => {
		event.preventDefault();
        
        const formData = new FormData(event.target);
        const inputValue = formData.get('title');

        var newGuid = uuidv4();

        var ingredients = [new Ingredient(newGuid, 0, formData.get('ingredients-units'), Number(formData.get('ingredients-quantity')), formData.get('ingredients-name'))];
        var instructions = [new Instruction(newGuid, 0, formData.get('instructions'))];

        var recipe = new RecipeToSave(newGuid, formData.get('title'), formData.get('description'), ingredients, instructions);

        postRecipe(recipe);

	};


return  (
<form onSubmit={handleSubmit}>
	<label>Title:</label>
	<input  type="text"  name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
	
    <label>Description:</label>
	<input  type="text"  name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
    <h1>Ingredients</h1>
    <label>Units:</label>
    <input  type="text"  name="ingredients-units" value={units} onChange={(e) => setUnits(e.target.value)}/>
    <label>Quantity:</label>
    <input  type="text"  name="ingredients-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
    <label>Name:</label>
    <input  type="text"  name="ingredients-name" value={ingredient} onChange={(e) => setIngredient(e.target.value)}/>

    <button className="moreIngredientsButton" name="moreIngredientsButton" type="button" >+</button>
    <h1>Instructions</h1>
    <label>1: </label>
    <input  type="text"  name="instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)}/>
    <button className="submitButton"type="submit">
      Save
    </button>
</form>
  );
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function postRecipe(recipe){
    console.log("Send Data to Api");


    try{
        // Send data to the backend via POST
        fetch('https://localhost:5401/api/recipe', {  // Enter your IP address here

            method: 'POST', 
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(recipe) // body data type must match "Content-Type" header
               
        })
    }
    catch(error){
        console.error(error);
    }
}

export default CreatePage