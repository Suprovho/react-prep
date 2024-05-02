import React from "react";

const Card = ({info}) => {
  return (
    <div className="main shadow-lg rounded-lg">
      <div className="card">
        <img src={info.avatar} alt="profilePic" className="card-img" />
        <h1 className="name font-semibold text-lg">{info.name}</h1>
        <h2 className="para">{info.jobRole}</h2>
      </div>
    </div>
  );
};

export default Card;
