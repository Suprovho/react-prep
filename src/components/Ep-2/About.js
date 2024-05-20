import React, { useState } from "react";
import SyncedInputs from "./Exampl";

//* lifting the state up,controlled and uncontrolled components.

const Accordion = () => { //* parent
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="m-2 p-2">
    <div className="p-4 flex flex-col border-2 border-solid border-black w-[50%] m-4">
      <h2 className="text-pretty text-lg font-medium">InnovateTech Solutions</h2>
      <Panel
        title={"About us"}
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        At InnovateTech Solutions, we believe in the power of innovation to
        transform the world. Our mission is to create cutting-edge solutions
        that address real-world challenges and drive positive change. Whether
        it’s developing groundbreaking software, designing sustainable hardware,
        or revolutionizing user experiences, we’re committed to pushing the
        boundaries of what’s possible.
      </Panel>
      <Panel
        title={"Contact info"}
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        website: InnovateTech.org.com , Feel free to visit their website or
        contact them directly for more information! 😊🌟
      </Panel>
    </div>
    <h1 className="font-semibold text-xl p-2">Another example -</h1>
    <SyncedInputs />
    </div>
  );
};

const Panel = ({ title, children, isActive, onShow }) => { //* child
  return (
    <div className="p-2 m-2">
      <h3 className="font-semibold m-1 p-1">{title}</h3>
      {isActive ? (
        <p className="text-pretty">{children}</p>
      ) : (
        <button className="p-1 text-sm text-black rounded-md border-2 border-solid border-black bg-gray-200" onClick={onShow}>
          show
        </button>
      )}
    </div>
  );
};

export default Accordion;
