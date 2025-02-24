import React from 'react'
import { GetMany } from '../Services/RecipeBookAPI';
import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Container} from 'react-bootstrap';

export const BrowseRecipes = () => {

  const [recipes, setRecipes] = useState([]);
  const [pageDetails, setPageDetails] = useState({pageSize:10, pageNumber:0});

  GetMany(setRecipes, pageDetails.pageSize, pageDetails.pageNumber);

  return(
    <Container style={{margin:'0', padding:'0', display:'flex', flexWrap: 'wrap'}}>
      {recipes.map((data, index) => <div key={index} className='CardContainer'><RecipeCard id={data.id} title={data.title} description={data.description} image='https://via.placeholder.com/150'/></div>)}
    </Container>
  );
}
