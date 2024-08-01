import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import CreatePage from "./CreatePage";

const BASE_URL = "https://localhost:5401/api/recipe/";


export const ViewCardFull = (props) => {
  
    
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
    
          try{
            const response = await fetch(`${BASE_URL}${props.functionCardId}`);
            response.json().then(json => {
                setMyData(json);
              }
            )
    
          }
          catch (error){
            console.error("Caught error: " + error);
            return <div>Something went Wrong</div> 
          }
    
        };
        fetchPosts();
      }, [])

      if(myData == []){
        return(null);
      }

    console.log(myData);
  
    return (
    <div className="recipeFull">
        <h1 className="recipeFull-title">{(myData.length == 0)?<></>:myData.title}</h1>
        <p className="recipeFull-description">{(myData.length == 0)?<></>:myData.description}</p>
        <h2 className="recipeFull-ingredients">Ingredients</h2>
        <ol className="recipeFull-ingredientsList">
            {(myData.length == 0)?<li>loading...</li>:(myData.ingredients.map((data,index) => {return(<li className="recipeFull-ingredientsList-item" key={index}>{data.quantity} {data.unit} of {data.ingredient}</li>)}))}
        </ol>
        <h2 className="recipeFull-instructions">Instructions</h2>
        <ol className="recipeFull-instructionsList">
            {(myData.length == 0)?<li>loading...</li>:(myData.instructions.map((data,index) => {return(<li className="recipeFull-instructionsList-item" key={index}>{data.instruction}</li>)}))}
        </ol>
    </div>
  )
}
