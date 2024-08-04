import React from 'react'
import { useEffect } from 'react';
import { myConfig } from '../Config';


export async function GetOne(id, setMyData){
    
    
    useEffect(() => {

        const fetchPosts = async () => {

            console.log("Getting recipe id: " + id);

            try{
            
            const response = await fetch(`${myConfig.apiBaseUrl}${id}`);
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

        }, [myConfig.apiBaseUrl, id, setMyData])

}

export async function GetMany(setRecipes, pageSize, pageNumber){

  useEffect(() => {
    const fetchPosts = async () => {

      try{
        const response = await fetch(`${myConfig.apiBaseUrl}?pageSize${pageSize}&pageNumber${pageNumber}`);
        response.json().then(json => {
           setRecipes(json);
          }
        )
  
      }
      catch (error){
        console.error("Caught error: " + error);
        return <div>Something went Wrong</div> 
      }
  
    };
    fetchPosts();

  }, [myConfig.apiBaseUrl, pageSize, pageNumber])
  
}

export async function DeleteRecipe(recipeId){

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

export async function UpdateRecipe(recipe){
  console.log("Put Data to Api");

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


export async function PostRecipe(recipe){
  console.log("Post Data to Api");

  try{
      // Send data to the backend via POST
      fetch(`${myConfig.apiBaseUrl}`, {  // Enter your IP address here

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
