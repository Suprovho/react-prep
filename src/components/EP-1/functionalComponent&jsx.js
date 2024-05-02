import React from 'react'

//!READ THE PDF BEFORE THIS ->>>>>


// functional component -> its a normal js function that return a piece of jsx or a react element
// and these all are react elements. components are reusable..

//! this is also known as component composition

//*NOTE: always remember that component name must start with caps.

 const Component2=()=><h1>this is also a proper functional component</h1> // implicit return..

const name="Suprovho";

//In React, a fragment is a way to group multiple children's elements. EX-> <> </>

const Basic1 = () => {
  return (
    <div>
        <h1>hello this is a functional component example</h1>   {/** this is a explicit return */}    
        <p>hey!{name}</p>
        <Component2 />  
    </div>
  )
}

export default Basic1;