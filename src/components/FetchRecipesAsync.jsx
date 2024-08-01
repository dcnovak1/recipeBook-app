import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from './Card';


const BASE_URL = "https://localhost:5401/api/recipe?pagesize=10&pagenumber=0";

const FetchRecipesAsync = (props) =>{


  const [myData, setMyData] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {

      try{
        const response = await fetch(`${BASE_URL}`);
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

  return(
    <main className='RecipesContainer'>
      {myData.map((data, index) => <div key={index} className='CardContainer'><Card function={props.function} functionCard={props.functionCard} id={data.id} title={data.title} description={data.description} image='https://via.placeholder.com/150'/></div>)}
    </main>
  );
}

export default FetchRecipesAsync