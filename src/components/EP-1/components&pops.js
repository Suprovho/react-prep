//! NOTES:

// how to plan components create a whole ui design then arrange components according to it parent child etc...

//! props ->

// passing an prop to a component is just like passing a argument to a function.
// props (properties) are a way to pass data from a parent component to a child component. another definition.

//! what is config driven ui ->

//* means ui is driven by config for ex - food delivery apps have different restro card at diff state and offers acc to festival at different states so ui change acc to it .

// config means diff set of data fetch from api acc to situations. 

// we should always use key with map because react will identify uniquely each component and if a new component is added it will add it at right position or else it will rerender the whole set of existing components and add new one to it. so its a huge performance optimization.

// we should never use index as a key. 

//Prop drilling is the process of passing down props through multiple layers of components. parent->child->grandchildren

import React from 'react'
import Card from './card';

const data=[
    {
      id: 1,
      restaurant_name: "The Hungry Owl",
      description: "Enjoy a variety of cuisines ranging from Italian to Mexican in a cozy ambiance.",
      location: "123 Main Street, Cityville",
      image: "https://dummyimage.com/300x200/000/fff&text=Restaurant+1"
    },
    {
      id: 2,
      restaurant_name: "Spice Garden",
      description: "Indulge in aromatic spices and flavorful dishes from India's diverse culinary landscape.",
      location: "456 Oak Avenue, Townsville",
      image: "https://dummyimage.com/300x200/000/fff&text=Restaurant+2"
    },
    {
      id: 3,
      restaurant_name: "Pasta Paradise",
      description: "Savor authentic pasta dishes made with love and traditional Italian recipes.",
      location: "789 Elm Street, Villagetown",
      image: "https://dummyimage.com/300x200/000/fff&text=Restaurant+3"
    },
    {
      id: 4,
      restaurant_name: "Sushi Haven",
      description: "Immerse yourself in the art of sushi-making with our fresh and innovative sushi creations.",
      location: "101 Pine Street, Hamlet City",
      image: "https://dummyimage.com/300x200/000/fff&text=Restaurant+4"
    },
    {
      id: 5,
      restaurant_name: "BBQ Barn",
      description: "Dive into a mouthwatering feast of smoky BBQ ribs, brisket, and more, cooked low and slow.",
      location: "202 Maple Avenue, Suburbia",
      image: "https://dummyimage.com/300x200/000/fff&text=Restaurant+5"
    },
    {
      id: 6,
      restaurant_name: "The Green Leaf Cafe",
      description: "Experience the freshness of locally sourced ingredients in our vibrant and healthy dishes.",
      location: "303 Cedar Road, Countryside",
      image: "https://dummyimage.com/300x200/000/fff&text=Restaurant+6"
    }
  ]
  

const ComponentsProps = () => {
  return (
    <div>
     {data.map((info)=><Card info={info} key={info.id} />)}
    </div>
  )
}

export default ComponentsProps;
