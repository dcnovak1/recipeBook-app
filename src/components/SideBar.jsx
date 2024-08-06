import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const SideBar = () => {
  return (
    <Container style={{margin:'0', maxWidth:'130px', maxHeight:'100%', height:'100vh'}}>
      <Navbar>
        <Nav className="flex-column">
          <Nav.Link style={{padding:'2px', fontSize:'1.5rem', color:'#F06105'}} href="/">Home</Nav.Link>
          <Nav.Link style={{padding:'2px', fontSize:'1.5rem', color:'#F06105'}} href="BrowseRecipes">Browse</Nav.Link>
          <Nav.Link style={{padding:'2px', fontSize:'1.5rem', color:'#F06105'}} href="">Popular</Nav.Link>
          <Nav.Link style={{padding:'2px', fontSize:'1.5rem', color:'#F06105'}} href="">Catagories</Nav.Link>
          <Nav.Link style={{padding:'2px', fontSize:'1.5rem', color:'#F06105'}} href="">Search</Nav.Link>
          <Nav.Link style={{padding:'2px', fontSize:'1.5rem', color:'#F06105'}} href="">Help</Nav.Link>
          <Nav.Link style={{padding:'2px', fontSize:'1.5rem', color:'#F06105'}} href="CreateRecipe">Create</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
);
    
}



export default SideBar