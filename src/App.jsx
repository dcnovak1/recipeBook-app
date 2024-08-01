import "./App.css";
import FetchRecipes from "./components/FetchRecipes";

import React, { useEffect } from 'react'
import { useState } from 'react';
import { ViewCardFull } from "./components/ViewCardFull";
import { CardEditor } from "./components/CardEditor";

const BASE_URL = "https://jsonplaceholder.typicode.com";

function App(){

  const  [viewState, setViewState] =  useState(0);
  const [cardId, setCardId] = useState("");
  const [cardData, setCardData] = useState([]);



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
          {(viewState == 0)?<FetchRecipes functionViewState={setViewState} functionCardId={setCardId}/>:<></>}
          {(viewState == 1)?<CardEditor valueCardId={cardId} functionViewState={setViewState} valueCardData={cardData} valueViewState={viewState}/>:<></>}
          {(viewState == 3)?<ViewCardFull valueCardId={cardId} functionViewState={setViewState} functionCardData={setCardData}/>:<></>}
          {(viewState == 4)?<CardEditor valueCardId={cardId} functionViewState={setViewState} valueCardData={cardData} valueViewState={viewState}/>:<></>}
        </div>
        
    </div>
  )
}


export default App;
