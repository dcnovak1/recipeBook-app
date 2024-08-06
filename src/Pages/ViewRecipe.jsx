import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react';
import { GetOne } from '../Services/RecipeBookAPI';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ViewRecipe = () => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    const [myData, setMyData] = useState([]);

    GetOne(id, setMyData);

    return (
        <Container>
            <Row>
                <Col>

                </Col>
                <Col>
                    <Card style={{width:'25rem'}}>
                        <Card.Img variant="top" style={{padding:'3px'}} src={'https://via.placeholder.com/150'} alt='Food picture'/>
                        <Card.Body style={{ padding:'0.5rem'}}>
                            <Card.Title style={{color:'#F06105', textAlign: 'center'}}>{myData.title}</Card.Title>
                            <Card.Text className='text-truncate' style={{color:'#DC582A', fontSize:'0.8rem', marginLeft:'10px', textWrap:'wrap'}}>{myData.description}</Card.Text>
                            <Card.Title style={{color:'#DC582A'}}>Ingredients</Card.Title>
                            <ol style={{color:'#DC582A'}}>
                                {(myData.ingredients == undefined)?<li>loading...</li>:(myData.ingredients.map((data,index) => {return(<li className="recipeFull-ingredientsList-item" key={index}>{data.quantity} {data.unit} of {data.ingredient}</li>)}))}
                            </ol>

                            <Card.Title style={{color:'#DC582A'}}>Ingredients</Card.Title>
                            <ol style={{color:'#DC582A'}}>
                                {(myData.instructions == undefined)?<li>loading...</li>:(myData.instructions.map((data,index) => {return(<li className="recipeFull-instructionsList-item" key={index}>{data.instruction}</li>)}))}
                            </ol>
                        <button className='viewRecipe-EditButton' style={{float:'right'}} onClick={()=>{navigate('/CreateRecipe?id='+ myData.id)}}>Edit</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
  )
}

export default ViewRecipe