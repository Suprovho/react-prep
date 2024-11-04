import React, { useState } from "react";

const StarComponent = ({ starCount = 5 }) => {
  const [onClickValue, setOnClickValue] = useState(0);
  const [onHoverValue, setOnHoverValue] = useState(0);

  // in this type of question if there is dynamic size such as stars otp etc then make another comp and take size as props

  return (
    <div className="flex justify-center items-center">
      {[...Array(starCount)].map((_, index) => {
        return (
          <span
            className={`size-6 font-bold text-2xl cursor-pointer ${
              (onHoverValue === 0 && index < onClickValue) ||
              index < onHoverValue
                ? `text-yellow-500`
                : ``
            }`}
            key={index}
            onClick={() => setOnClickValue(index + 1)}
            onMouseEnter={() => setOnHoverValue(index + 1)}
            onMouseLeave={() => setOnHoverValue(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

const Star = () => {
  return (
    <div className="flex flex-col justify-center items-center h-dvh gap-8">
      <h1 className="font-bold text-2xl">Star Rating -</h1>
      <StarComponent starCount={5} />
    </div>
  );
};

export default Star;
