import React, { useState } from "react";

const Ep1 = () => {
  const [data, setData] = useState([
    { country: "India", selected: false },
    { country: "Japan", selected: false },
    { country: "America", selected: false },
    { country: "Russia", selected: false },
  ]);

  const handelCheck = (index) => {
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = { ...updatedData[index], selected: !updatedData[index].selected }; // another way but logic is same.
      return updatedData;
    });
  };

  const handelDelete = (index) => {
    data.splice(index,1);
    setData([...data]); 
    //shallow copy. to make changes that are done without doing this then react will point to old reference.
    //This shallow copy ensures that setData is working with a "new" array reference, triggering a re-render
  };

  return (
    <div className="p-4 m-4">
      <ul>
        {data.map((value, index) => (
          <div key={index} className="flex justify-center items-center">
            <input
              type="checkbox"
              checked={value.selected}
              onClick={() => handelCheck(index)}
            />
            <li>
              {value.country}
              {value.selected ? (
                <span className="cursor-pointer" onClick={() => handelDelete(index)}>&#x2715;</span>
              ) : (
                ""
              )}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Ep1;
