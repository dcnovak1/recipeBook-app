import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary" style={{padding:'0'}}>
    <Container style={{margin:'0', backgroundColor:'orange', maxWidth:'100%'}}>
      <Navbar.Brand href="home">Recipe Book</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <Nav.Link href="Help">Help</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Footer