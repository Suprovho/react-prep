import React from 'react'

const Card = ({info}) => { // destructuring..
    
    const {restaurant_name,description,location}=info;

    // we can not write for loop inside jsx because jsx return object so instead we use map as we cant write for loop for any object.

  return (
    <div>
        <h1>{restaurant_name}</h1>
        <p>{description}</p>
        <p>{location}</p>
    </div>
  )
}

export default Card;