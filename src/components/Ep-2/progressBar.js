import React, { useEffect, useState } from "react";
import { MAX, MIN } from "../../utils/constant,";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));
    if (value >= MAX) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="h-7 relative  w-[500px] bg-slate-50 border-2 border-solid border-black rounded-xl overflow-hidden">
      <span
        className="absolute w-[500px] flex justify-center items-center z-10"
        style={{
          color: percent > 49 ? "white" : "black",
        }}
      >
        {percent.toFixed()}%
      </span>
      <div
        className="progress"
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left",
        }}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent}
        role="progressbar"
      />
    </div>
  );
};

export default ProgressBar;
