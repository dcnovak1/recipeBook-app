import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react';
import { GetOne } from '../Services/RecipeBookAPI';
import { useNavigate } from 'react-router-dom';

const ViewRecipe = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    const [myData, setMyData] = useState([]);

    GetOne(id, setMyData);
  
    return (
    <div className="viewRecipe-Container">
        <h1 className="viewRecipe-title">{(myData == undefined)?<></>:myData.title}</h1>
        <p className="viewRecipe-description">{(myData == undefined)?<></>:myData.description}</p>
        <h2 className="viewRecipe-ingredients">Ingredients</h2>
        <ol className="viewRecipe-ingredientsList">
            {(myData.ingredients == undefined)?<li>loading...</li>:(myData.ingredients.map((data,index) => {return(<li className="recipeFull-ingredientsList-item" key={index}>{data.quantity} {data.unit} of {data.ingredient}</li>)}))}
        </ol>
        <h2 className="viewRecipe-instructions">Instructions</h2>
        <ol className="viewRecipe-instructionsList">
            {(myData.instructions == undefined)?<li>loading...</li>:(myData.instructions.map((data,index) => {return(<li className="recipeFull-instructionsList-item" key={index}>{data.instruction}</li>)}))}
        </ol>
        <button className='viewRecipe-EditButton' onClick={()=>{navigate('/CreateRecipe?id='+ myData.id)}}>Edit</button>
    </div>
  )
}

export default ViewRecipe