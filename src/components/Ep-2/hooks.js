
// never keep hard coded data in comp file import it from constants file in utils folder.

// there are two type of export one is default and another is named export.

//* export const IMG_URL="http://hello.world"; //named export.

//* import {IMG_URL} from "../file path"

//!REACT HOOKS ->

// its a normal js utility function given by react..

// use state act as a local state variable which allow functional components to manage state 

//* const[state,setState] = useState(initialValue); initial value as its parameter it can be array object etc..

//* The first element is the current state value.

//* Second element is the function that is used to update the state.

//* its a powerful react variable that keep sync with ui layer and data layer which cant be done using normal js variables which will update the value but not ui.

//* whenever a state variable is updated the react re-render the component.

import React from 'react'
import { useState } from "react";

const Hooks = () => {
const[count,setCount] = useState(0); 
  return (
    <div>
    <h1>count</h1>
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}

export default Hooks;