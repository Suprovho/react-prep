import React from 'react'

const Card = ({info}) => { // destructuring..
    
    const {restaurant_name,description,location}=info;

  return (
    <div>
        <h1>{restaurant_name}</h1>
        <p>{description}</p>
        <p>{location}</p>
    </div>
  )
}

export default Card;