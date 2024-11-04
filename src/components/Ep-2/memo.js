import React, { useMemo, useRef, useState } from "react";
import { prime } from "../../utils/constant,";

// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

const Memo = () => {
  const [text, setText] = useState(0);
  const [theme, setTheme] = useState(false);

  const [y, setY] = useState(0);


  //* the diff between normal variable and state variable is normal variable update the value but it doesn't reflect the change on ui and another point on re rendering it go back to its defined value which is 0 here , because on re render the prev execution context get destroyed and again new one is created basic js concept .

  let x = 0;

  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.

  //The useRef Hook allows you to persist values between renders.

  // It can be used to store a mutable value that does not cause a re-render when updated.

  const ref = useRef(0);

  /**
   * not like ref=0;
   * 
   * ref is a obj
   * 
   * ref={current:0};
   * 
   */

  console.log("rendering...");

  // heavy operation.

  const nthPrime = useMemo(() => prime(text), [text]); //* it is caching the result every time the component re-renders

  return (
    <div className="flex">
      <div
        className={`border-2 border-solid border-black p-4 m-4 mt-10 flex flex-col items-center justify-center h-96 w-96 ${
          theme && `bg-gray-900 text-white`
        }`}
      >
        <h1 className="text-xl font-semibold">use Memo -</h1>
        <button
          className="border-2 border-solid border-black p-2 rounded-lg m-4"
          onClick={() => setTheme(!theme)}
        >
          toggle Theme
        </button>
        <input
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={
            "border-2 border-solid border-black p-1 w-[50%] rounded-md"
          }
        />
        <div className="m-4">
          <h2 className="font-bold">nth prime is : {nthPrime}</h2>
        </div>
      </div>

      <div className="flex flex-col border-2 border-solid border-black p-4 m-4 mt-10 items-center justify-center h-96 w-96">
        <h2 className="text-xl font-semibold">use Ref</h2>
        <button
          onClick={() => {
            x = x + 1;
            console.log("x=", x);
          }}

          className="border-2 border-solid border-black p-2 rounded-lg m-4"
        >
          increase x
        </button>
        <p>Let={x}</p>
        <button onClick={() => setY(y + 1)} className="border-2 border-solid border-black p-2 rounded-lg m-4">increase y</button>
        <p>state={y}</p>
        <button
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref=", ref.current);
          }}

          className="border-2 border-solid border-black p-2 rounded-lg m-4"
        >
          increase ref
        </button>
        <p>ref={ref.current}</p>
      </div>
    </div>
  );
};

export default Memo;
