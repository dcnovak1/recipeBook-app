import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { myConfig } from '../Config'
import IngredientsList from './IngredientsList';
import InstructionsList from './InstructionsList';

export const EditCard = (props) => {
      
    const [myData, setMyData] = useState(props.valueCardData);
    const [myIngredients, setMyIngredients] = useState(myData.ingredients);
    const [myInstructions, setMyInstructions] = useState(myData.instructions);


    
  function handleAddInstruction() {
    setMyInstructions([
      ...myInstructions,
      {
        recipeId: myData.id,
        ordinalPosition: myInstructions.length,
        Instruction: ""
      }
    ]);
  }

  function handleChangeInstruction(nextInstruction) {
    setMyInstructions(myInstructions.map(t => {
      if (t.ordinalPosition === nextInstruction.ordinalPosition) {
        return nextInstruction;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteInstruction(ordinalPosition) {
    setMyInstructions(
        myInstructions.filter(t => t.ordinalPosition !== ordinalPosition)
    );
  }



  function handleAddIngredient() {
    setMyIngredients([
      ...myIngredients,
      {
        recipeId: myData.id,
        ordinalPosition: myIngredients.length,
        unit: "",
        quantity: 0,
        ingredient: ""
      }
    ]);
  }

  function handleChangeIngredient(nextIngredient) {
    setMyIngredients(myIngredients.map(t => {
      if (t.ordinalPosition === nextIngredient.ordinalPosition) {
        return nextIngredient;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteIngredient(ordinalPosition) {
    setMyIngredients(
        myIngredients.filter(t => t.ordinalPosition !== ordinalPosition)
    );
  }


    //console.log(myData, myIngredients, myInstructions);


    if(myData.length == 0){
        return(<h1>Loading....</h1>);
    }
    else{
    return (
    <div className="recipeEdit">
        <label className='recipe-title-label'>Title:</label>
        <input className='recipe-title'  type="text"  name="title" value={myData.title} onChange={(e) => setMyData({...myData, title: e.target.value})}/>
        <div></div>
        <label className='recipe-description-label'>Description:</label>
        <input className='recipe-description' type="text"  name="description" value={myData.description} onChange={(e) => setMyData({...myData, description: e.target.value})}/>

        <h1 className="catagory">Ingredients </h1>
        <IngredientsList myIngredients={myIngredients} onChangeIngredient={handleChangeIngredient} onDeleteIngredient={handleDeleteIngredient}/>
        <button className='button-add-ingredients' onClick={() => {handleAddIngredient();}}>Add</button>
        <h1 className="catagory">Instructions </h1>
        <InstructionsList myInstructions={myInstructions} onChangeInstruction={handleChangeInstruction} onDeleteInstruction={handleDeleteInstruction}/>
        <button className='button-add-instructions' onClick={() => {handleAddInstruction();}}>Add</button>
        <div></div>
        <button className="button-save"type="button" onClick={() => UpdateRecipe(myData, myIngredients, myInstructions)}>
        Update
        </button>
        <button className='button-delete' onClick={() => DeleteRecipe(myData.id)}>Delete</button>
    </div>
  )
    }
}


function DeleteRecipe(recipeId){

    console.log("Deleting recipe: " + recipeId);

    try{
    // Send data to the backend via POST
    var response = fetch(`${myConfig.apiBaseUrl}${recipeId}`, {  // Enter your IP address here

        method: 'DELETE', 
        mode: 'cors',   
    })
    }
    catch(error){
        console.error(error);
    }

    console.log(response);
}

function UpdateRecipe(recipe, myIngredients, myInstructions){
    console.log("Send Data to Api");

    console.log(myIngredients);

    for(var i = 0; i < myIngredients.length; i++){
      console.log(myIngredients[i]);
      myIngredients[i].quantity = Number(myIngredients[i].quantity);
    }

    recipe.ingredients = myIngredients;
    recipe.instructions = myInstructions;



    try{
        // Send data to the backend via POST
        var promise = fetch(`${myConfig.apiBaseUrl}`, {  // Enter your IP address here

            method: 'PUT', 
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