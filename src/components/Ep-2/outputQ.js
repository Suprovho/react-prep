//! Q1 -  react recon... example.

import { useEffect, useState } from "react";

//!Q2 ->BELOW CODE

//!Q3 ->DIFF BETWEEN USE MEMO AND USE CALLBACK

//!Q4 -> create a search bar which show suggestion based on json obj or restful api call.

const Output = () => {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [filteredData,setFillteredData]=useState([])

  useEffect(() => {
    console.log("Component rendered successfully");
  }, []);

  const btnClick = () => {
    // setCount(count + 1);
    // setCount(count + 1);

    //*solution ->

    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const user = [
    {
      name: "suprovho",
      email: "abc@gmail.com",
      id: 1,
    },
    {
      name: "asish",
      email: "123@gmail.com",
      id: 2,
    },
  ];

  const handelSearch = () => {
    setShowResult(true);
    const filterData= user.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()));
    setFillteredData(filterData);
  };

 console.log(filteredData);
 

  return (
    <div className="p-2">
      <button onClick={btnClick} className="border-2 border-solid border-black m-4 p-1">Click me</button>
      <p className="m-2">You clicked {count} times</p>

      {/* in 1st case it will print 1 time because when btn is clicked and  the fun get called it will increase count to 1  but as it forms closure with the state count variable  when again its called it point to the reference of state variable whose value is  0 so it will increase to 1 only.  */}

      {
        //* but in 2nd case as we have set a callback so in next setCount same params will be passed so it will continue 1 2 3..
      }

      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 border-solid border-black mr-2 p-1"
      />
      <button onClick={handelSearch}>search</button>
      {showResult && (
        <div className="p-2">
          {filteredData?.length===0 ? (
            <h2>item not found</h2>
          ) : (
            filteredData.map((e) => {
              return (
                <div key={e.id}>
                  <h1 className="font-bold">{e.name}</h1>
                  <h2 className="font-bold">{e.email}</h2>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default Output;
