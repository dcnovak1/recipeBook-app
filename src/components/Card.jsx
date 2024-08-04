import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = (props) => {

  const navigate = useNavigate();

  return (
    <div name={props.id} className='card' onClick={(e) => {navigate('/ViewRecipe?id=' + e.currentTarget.getAttribute("name"))}}>
        <img className="card-image" src={props.image} alt='Food picture'></img>
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-text'>{props.description}</p>
    </div>
  )
}

export default Card;