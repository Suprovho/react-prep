import { useState } from "react";
import data from "./data.json";
const FileEx = () => {
  return (
    <div>
      <FileExplorer data={data} />
    </div>
  );
};

//* nth level nested structure 

const FileExplorer = ({ data }) => {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div className="m-4  border-l border-solid border-black pl-2 ">
      <h5>
        {data.type === "folder" ? (showChildren ? "📂" : "📁") : "📄"}  
        <span
          onClick={() => setShowChildren(!showChildren)}
          className="cursor-pointer m-2"
        >
          {data.name}
        </span>
      </h5>

      {showChildren &&
        data?.children?.map((childrenData, index) => {
          return <FileExplorer data={childrenData} key={index} /> ;
        })}
    </div>
  );
};

export default FileEx;
