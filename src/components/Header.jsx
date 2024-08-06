import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';

const Header = () => {

  return (
    <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary" style={{padding:'0'}}>
    <Container style={{margin:'0', backgroundColor:'orange', maxWidth:'100%'}}>
      <Navbar.Brand href="/">Recipe Book</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <input placeholder='Search'/>
        </Nav>
        <Nav>
          <Nav.Link href="Contact">Contact</Nav.Link>
          <Nav.Link href="About">
          About
          </Nav.Link>
          <Button href='login' style={{marginTop:'0.2rem', marginBottom:'0.2rem'}}variant="primary">Login</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Header