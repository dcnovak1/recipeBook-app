import React from 'react'

const Card = (props) => {
  return (
    <div key={props.id} className='card' onClick={() => props.function(3)}>
        <img className="card-image" src={props.image} alt='Food picture'></img>
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-text'>{props.description}</p>
    </div>
  )
}

export default Card