import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const RecipeCard = (props) => {

  const navigate = useNavigate();

  return (
        <Card name={props.id} className='recipeCard' style={{width:'12rem', height:'20rem', margin:'3px'}} onClick={(e) => {navigate('/ViewRecipe?id=' + e.currentTarget.getAttribute("name"))}}>
            <Card.Img variant="top" style={{padding:'3px'}} src={props.image} alt='Food picture'/>
            <Card.Body style={{ padding:'0.5rem'}}>
              <Card.Title style={{color:'#F06105', marginLeft:'0px'}}>{props.title}</Card.Title>
              <Card.Text className='text-truncate' style={{color:'#DC582A', fontSize:'0.8rem', marginLeft:'10px', textWrap:'wrap'}}>{props.description}</Card.Text>
            </Card.Body>
        </Card>
  )
}

export default RecipeCard;