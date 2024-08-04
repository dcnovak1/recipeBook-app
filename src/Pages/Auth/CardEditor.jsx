import React from 'react'
import { useState } from 'react';
import IngredientsList from '../../components/IngredientsList';
import InstructionsList from '../../components/InstructionsList';
import { useSearchParams } from 'react-router-dom';
import { GetOne } from '../../Services/RecipeBookAPI';
import { DeleteRecipe, UpdateRecipe, PostRecipe } from '../../Services/RecipeBookAPI';
import { useNavigate } from 'react-router-dom';

// Used to create and edit a recipe
function emptyRecipe() {

  var newId = uuidv4();
  
  return({
    id : newId,
    title: "",
    description: "",
    createdDate: "2024-07-29T21:35:08.4886823+00:00", //todo add getdate
    logo: null, //todo add images
    ingredients: [{
      recipeId: newId,
      ordinalPosition: 0,
      unit: "",
      quantity: 0,
      ingredient: ""
    }],
    instructions: [{
      recipeId: newId,
      ordinalPosition: 0,
      instruction: ""
    }]})
}


export const CardEditor = (props) => {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [recipe, setRecipe] = useState(emptyRecipe());

  if(id != undefined){
    GetOne(id, setRecipe);
  }
    
    
  function handleAddInstruction() {
    setRecipe({
      ...recipe,
      instructions: [
        ...recipe.instructions,
        {
          recipeId: recipe.id,
          ordinalPosition: recipe.instructions.length,
          instruction: ""
        }
      ]
    });
  }

  function handleChangeInstruction(nextInstruction) {
    setRecipe({...recipe, instructions: recipe.instructions.map(t => {
      if (t.ordinalPosition === nextInstruction.ordinalPosition) {
        return nextInstruction;
      } else {
        return t;
      }
    })});
  }

  function handleDeleteInstruction(ordinalPosition) {
    setRecipe(
      {...recipe,
      instructions: recipe.instructions.filter(t => t.ordinalPosition !== ordinalPosition)}
    );
  }



  function handleAddIngredient() {
    setRecipe({...recipe, ingredients: [
      ...recipe.ingredients,
      {
        recipeId: recipe.id,
        ordinalPosition: recipe.ingredients.length,
        unit: "",
        quantity: 0,
        ingredient: ""
      }
    ]});
  }

  function handleChangeIngredient(nextIngredient) {
    setRecipe({...recipe, ingredients: recipe.ingredients.map(t => {
      if (t.ordinalPosition === nextIngredient.ordinalPosition) {
        return nextIngredient;
      } else {
        return t;
      }
    })});
  }

  function handleDeleteIngredient(ordinalPosition) {
    setRecipe(
        {
          ...recipe,
          ingredients: recipe.ingredients.filter(t => t.ordinalPosition !== ordinalPosition)
        }
    );
  }
    if(recipe == undefined){
        return(<h1>Loading....</h1>);
    }
    else{
      return (
        <div className="recipeEdit">
            <label className='recipe-title-label'>Title:</label>
            <input className='recipe-title'  type="text"  name="title" value={recipe.title} onChange={(e) => setRecipe({...recipe, title: e.target.value})}/>
            <div></div>
            <label className='recipe-description-label'>Description:</label>
            <input className='recipe-description' type="text"  name="description" value={recipe.description} onChange={(e) => setRecipe({...recipe, description: e.target.value})}/>

            <h1 className="catagory">Ingredients </h1>
            <IngredientsList myIngredients={recipe.ingredients} onChangeIngredient={handleChangeIngredient} onDeleteIngredient={handleDeleteIngredient}/>
            <button className='button-add-ingredients' onClick={() => {handleAddIngredient();}}>Add</button>
            <h1 className="catagory">Instructions </h1>
            <InstructionsList myInstructions={recipe.instructions} onChangeInstruction={handleChangeInstruction} onDeleteInstruction={handleDeleteInstruction}/>
            <button className='button-add-instructions' onClick={() => {handleAddInstruction();}}>Add</button>
            <div></div>
            {(id == undefined)?(<button className="button-save"type="button" onClick={() => {PostRecipe(recipe), navigate('/')}}>Create</button>):(<button className="button-save"type="button" onClick={() => UpdateRecipe(recipe)}>Update</button>)}
            {(id == undefined)?<></>:<button className='button-delete' onClick={() => {DeleteRecipe(recipe.id), navigate('/')}}>Delete</button>}
        </div>
    )
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
