import React, { useEffect, useState } from "react";

const OutputQ2 = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    // setcount(count + 1);
    console.log(count); // it will show 0 as set state is an asynchronous call it will not update directly ..
    // that is why when i try to find the result after api call in many projects it return an empty array.
  }, []);

  useEffect(() => {
    // setcount(count + 1);
    // setcount((count) => count + 1); // solution
  }, []);

  //! COMMENT THE PREV CODE BEFORE LINE 21.. TO RUN NEXT .

  const handelClick = () => {
    setcount(count + 1);

    const timer = setTimeout(() => {
      alert(count);

      // first time it will pop up 0 as it point to count value which at first was 0 as when set time out was called count value was still 0 state not updated yet.

      // if we call this function then each time we click alter will pop up with 0 1 2 3 like this because it is creating new set timeout each time and that form closure with count as each time we click it form clou.. with updated value example on click set time out form clos.. with 1 then agin on click with 2 but all are diff note it.

      //* solution to avobe - use clear time out

      //* timer store identifier of each time out. set time out return numeric identifier.
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <div className="p-4 m-4 font-semibold text-xl">
      <button
        className="border-2 border-solid border-black p-1"
        onClick={handelClick}
      >
        click me
      </button>

      {count}
    </div>
  );

  //* it will show 1 because the of async behavior of above case the by the time it render next useEffect it value is still 0 so it increment to 1 as 1st useEf.. set count take time to update and as useEf.. is synchronous it will not wait for other.

  // to handel this and to keep incrementing we can use previous chapter topic

  //! NOTE - REACT UPDATE THE STATE ASYNC WAY BECAUSE IT DON'T WANT TO BLOCK THE MAIN THREAD OR CALL STACK..
};

export default OutputQ2;
