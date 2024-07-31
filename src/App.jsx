import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/Card";
import FetchRecipesAsync from "./components/FetchRecipesAsync";

import React, { useEffect } from 'react'
import { useState } from 'react';
import CreatePage from "./components/CreatePage";
import { ViewCardFull } from "./components/ViewCardFull";

const BASE_URL = "https://jsonplaceholder.typicode.com";

function App(){

  const  [viewState, setViewState] =  useState(0);




  return(
    <div>
        
        <div className="sidenav">
          <div id="BrowseButton" className="sidenav-button" onClick={() => setViewState(0)}>Browse</div>
          <div id="CreateButton" className="sidenav-button" onClick={() => setViewState(1)}>Create</div>
        </div>
       <div className="topnav">
          <a className="active" href="#home">Recipe Book</a>
        </div> 
        <div className="mainContainer">
          {(viewState == 0)?<FetchRecipesAsync function={setViewState}/>:<></>}
          {(viewState == 1)?<CreatePage/>:<></>}
          {(viewState == 3)?<ViewCardFull/>:<></>}
        </div>
        
    </div>
  )
}


export default App;
