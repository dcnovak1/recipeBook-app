import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from './Card';
import { myConfig } from '../Config'

const FetchRecipes = (props) =>{


  const [myData, setMyData] = useState([]);
  const [pageDetails, setPageDetails] = useState({pageSize:1, pageNumber:2});
  
  useEffect(() => {
    const fetchPosts = async () => {

      try{
        const response = await fetch(`${myConfig.apiBaseUrl}?pageSize${pageDetails.pageSize}&pageNumber${pageDetails.pageNumber}`);
        response.json().then(json => {
            setMyData(json);
          }
        )

      }
      catch (error){
        console.error("Caught error: " + error);
        return <div>Something went Wrong</div> 
      }

    };
    fetchPosts();
  }, [])

  if(myData.length == 0){
    return <></>
  }
  else{
    return(
      <main className='RecipesContainer'>
        {myData.map((data, index) => <div key={index} className='CardContainer'><Card functionViewState={props.functionViewState} functionCardId={props.functionCardId} id={data.id} title={data.title} description={data.description} image='https://via.placeholder.com/150'/></div>)}
      </main>
    );
  }
}

export default FetchRecipes