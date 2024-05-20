import React from "react";

const Card = ({info}) => {
  return (
    <div className="main shadow-lg rounded-lg h-[300px]">
      <div className="card">
        <img src={info.avatar} alt="profilePic" className="card-img" />
        <h1 className="name font-semibold text-lg">{info.name}</h1>
        <h2 className="para">{info.jobRole}</h2>
      </div>
    </div>
  );
};

// higher order component is a function that takes a component and returns a component.

export const Hoc = (Card) => {
  return(props)=>(
    <div className="flex bg-green-50">
        <Card {...props} />
    </div>
  )
}


export default Card;
