import React from 'react'

function Card ({id, title, description, image}) {
  return (
    <div key={id} className='card'>
        <img className="card-image" src={image} alt='Food picture'></img>
        <h2 className='card-title'>{title}</h2>
        <p className='card-text'>{description}</p>
    </div>
  )
}

export default Card