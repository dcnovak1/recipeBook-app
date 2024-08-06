import React from 'react'
import { useState } from 'react';
import IngredientsList from '../../components/IngredientsList';
import InstructionsList from '../../components/InstructionsList';
import { useSearchParams } from 'react-router-dom';
import { GetOne } from '../../Services/RecipeBookAPI';
import { DeleteRecipe, UpdateRecipe, PostRecipe } from '../../Services/RecipeBookAPI';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';

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
        <Container>
        <Row>
            <Col>

            </Col>
            <Col>
                <Card style={{width:'25rem'}}>
                    <Card.Img variant="top" style={{padding:'3px'}} src={'https://via.placeholder.com/150'} alt='Food picture'/>
                    <Card.Body style={{ padding:'0.5rem'}}>
                        <Card.Title style={{color:'#DC582A'}}>
                          Title: <input  className='recipe-title'  type="text"  name="title" value={recipe.title} onChange={(e) => setRecipe({...recipe, title: e.target.value})}/>
                        </Card.Title>
                        
                        <Card.Title style={{fontSize: '1rem', color:'#DC582A'}}>
                          Description: <textarea className='recipe-description' type="text"  name="description" value={recipe.description} onChange={(e) => setRecipe({...recipe, description: e.target.value})}/>
                        </Card.Title>

                        <Card.Title style={{color:'#DC582A'}}>Ingredients</Card.Title>
                        <Card.Title style={{fontSize:'1rem', color:'#DC582A'}}><Row style={{marginLeft: '20px'}}><Col>Quantity</Col><Col>Unit</Col><Col>Name</Col></Row></Card.Title>
                        <IngredientsList myIngredients={recipe.ingredients} onChangeIngredient={handleChangeIngredient} onDeleteIngredient={handleDeleteIngredient}/>
                        <button className='btn btn-primary' style={{marginLeft:'30px', width:'300px', paddingTop:'0', paddingBottom:'0'}} onClick={() => {handleAddIngredient();}}>+</button>

                        <Card.Title style={{color:'#DC582A'}}>Instructions</Card.Title>
                        <InstructionsList myInstructions={recipe.instructions} onChangeInstruction={handleChangeInstruction} onDeleteInstruction={handleDeleteInstruction}/>
                        <button className='btn btn-primary' style={{marginLeft:'30px', width:'300px', marginBottom:'10px', paddingTop:'0', paddingBottom:'0'}} onClick={() => {handleAddInstruction();}}>+</button>
                        <div></div>
                        {(id == undefined)?(<button className="btn btn-success"type="button" onClick={() => {PostRecipe(recipe), navigate('/')}}>Create</button>):(<button className="btn btn-success"type="button" onClick={() => UpdateRecipe(recipe)}>Update</button>)}
                        {(id == undefined)?<></>:<button className='btn btn-danger' style={{float:'right'}} onClick={() => {DeleteRecipe(recipe.id), navigate('/')}}>Delete</button>}
                    </Card.Body>
                </Card>
            </Col>
            <Col>

            </Col>
        </Row>
    </Container>
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
