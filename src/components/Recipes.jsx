import React from 'react'
import { useState } from 'react';
import tastySalad from './images/tastySalad.jpg';

const Recipes = () => {

    const [recipes, setRecipes] = useState([{id: 1, name: "salad"}, {id: 2, name: "meatloaf"},{id: 3, name: "burger"}, {id: 4, name: "pasta"}])

  return (
    <main className='container'>
      <div class='row'>
        <div class='col-12'>
          {
            recipes.map((recipe) => (
              <div id={recipe.id} classname='card'>
                <img src={tastySalad} className='card-img-top'/>
                <div className='card-body'>
                  <h5 className='card-title'>
                    {recipe.name}
                  </h5>
                </div>
              </div>))
          }
        </div>
      </div>
    </main>
  )
}

export default Recipes