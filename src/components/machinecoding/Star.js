import React, { useState } from "react";

export const StarComponent = ({ starCount = 5, clickable,onChange}) => { // on change is a cb function. do not confuse with default js on change.
  const [onClickValue, setOnClickValue] = useState(0);

  const handleClick = (value) => {
    setOnClickValue(value);
    if (onChange) {
      onChange(value); 
    }
  };
 
  
  // in this type of question if there is dynamic size such as stars otp etc then make another comp and take size as props

  // const [onHoverValue, setOnHoverValue] = useState(0);
  //onMouseEnter={() => setOnHoverValue(index + 1)}
  // onMouseLeave={() => setOnHoverValue(0)}

  //  (onHoverValue === 0 && index < onClickValue) ||
  //  index < onHoverValue
  //    ? `text-yellow-500`
  //    : ``
  // }`

  return (
    <>
      {[...Array(starCount)].map((_, index) => {
        return (
          <button
            className={`size-5 font-bold text-xl ${
              index < onClickValue || !clickable ? `text-yellow-400` : ``
            }`}
            key={index}
            onClick={()=>handleClick(index + 1)}
            disabled={!clickable}
            aria-label={onClickValue}
          >
            &#9733;
          </button>
        );
      })}
    </>
  );
};

const Star = () => {
  return (
    <div className="flex flex-col justify-center items-center h-dvh gap-8">
      <h1 className="font-bold text-2xl">Star Rating -</h1>
      <StarComponent starCount={5} clickable={true} />
    </div>
  );
};

export default Star;
