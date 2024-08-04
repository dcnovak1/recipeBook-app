import React from 'react'
import { GetMany } from '../Services/RecipeBookAPI';
import { useState } from 'react';
import Card from '../components/Card';

export const BrowseRecipes = () => {

  const [recipes, setRecipes] = useState([]);
  const [pageDetails, setPageDetails] = useState({pageSize:10, pageNumber:0});

  GetMany(setRecipes, pageDetails.pageSize, pageDetails.pageNumber);

  return(
    <main className='RecipesContainer'>
      {recipes.map((data, index) => <div key={index} className='CardContainer'><Card id={data.id} title={data.title} description={data.description} image='https://via.placeholder.com/150'/></div>)}
    </main>
  );
}
