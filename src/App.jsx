import React, { useEffect } from 'react'
import { CardEditor } from "./Pages/Auth/CardEditor";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import { BrowseRecipes } from "./Pages/BrowseRecipes";
import {Routes, Route} from 'react-router-dom';
import ViewRecipe from "./Pages/ViewRecipe";
import Login from "./Pages/Login";
import { Col, Row, Container } from "react-bootstrap";


function App(){

  return(
    <Container style={{margin:'0', padding:'0', maxWidth:'100%', maxHeight:'100%'}}>
      <Row>
        <Header/>
      </Row>
      <Row>
        <Col style={{maxWidth:'140px'}}>
          <SideBar/>
        </Col>
        <Col fluid='true'>
          <Container style={{margin:'0', padding:'0.5rem', backgroundColor: "#cccccc", maxWidth:'100vw', minHeight:'100vh'}}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/BrowseRecipes" element={<BrowseRecipes/>}/>
              <Route path="/ViewRecipe" element={<ViewRecipe/>}/>
              <Route path="/CreateRecipe" element={<CardEditor/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>
          </Container>
        </Col>
      </Row>
      <Row>
        <Footer/>
      </Row>
      
      
    </Container>
  )
}


export default App;
