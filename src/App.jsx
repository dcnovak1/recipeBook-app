import "./App.css";
import React, { useEffect } from 'react'
import { useState } from 'react';
import { CardEditor } from "./Pages/Auth/CardEditor";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import { BrowseRecipes } from "./Pages/BrowseRecipes";
import {Routes, Route} from 'react-router-dom';
import ViewRecipe from "./Pages/ViewRecipe";


function App(){

  const  [viewState, setViewState] =  useState(0);
  const [cardId, setCardId] = useState("");
  const [cardData, setCardData] = useState([]);



  return(
    <>
      <Header/>
      <SideBar/>
      <div className="mainContainer">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/BrowseRecipes" element={<BrowseRecipes/>}/>
          <Route path="/ViewRecipe" element={<ViewRecipe/>}/>
          <Route path="/CreateRecipe" element={<CardEditor/>}/>
        </Routes>
        {/* {(viewState == 0)?<FetchRecipes functionViewState={setViewState} functionCardId={setCardId}/>:<></>}
        {(viewState == 1)?<CardEditor valueCardId={cardId} functionViewState={setViewState} valueCardData={cardData} valueViewState={viewState}/>:<></>}
        {(viewState == 4)?<CardEditor valueCardId={cardId} functionViewState={setViewState} valueCardData={cardData} valueViewState={viewState}/>:<></>}
          */}
      </div> 
      <Footer/>
    </>
  )
}


export default App;
