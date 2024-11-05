import { useState } from "react";

const data = [
  {
    label: "veg",
    content: "list of veg items",
  },
  {
    label: "non veg",
    content: "list of non veg items",
  },
  {
    label: "vegan",
    content: "list of non vegan items",
  },
];

const TabComponent = () => {
  return (
    <div className="flex justify-center items-center m-4">
      <Tabs data={data} />
    </div>
  );
};

export default TabComponent;

const Tabs = ({ data }) => {
const[currIndex,setCurrIndex]=useState(0);
  return (
    <div className="flex flex-col justify-center items-center p-2">
      <div className="flex gap-1 w-full">
        {data.map((e, index) => (
          <button
            className="border-2 border-solid border-black rounded-md p-1 w-20 cursor-pointer hover:bg-slate-200"
            key={index}
            onClick={()=>setCurrIndex(index)}
          >
            {e.label}
          </button>
        ))}
      </div>
      <div className="border-2 border-solid rounded-md border-t-0 border-black w-full h-[300px] flex items-center justify-center">
        {data[currIndex].content}
      </div>
    </div>
  );
};
