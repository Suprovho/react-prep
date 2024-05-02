// refer the pdf.

import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./card";

// ‘ useEffect() ’ is a Hook React provides
// us, it is a regular JavaScript function, to help manage our components.

// useEffect() ' takes two arguments .
// 1. Callback function.
// 2. Dependency Array.

// by default it render one time if dependency array is empty.

//Callback function is getting called after the whole component get rendered.
//fetch() ’ always return promise to us

//CORS (Cross-Origin Resource Sharing) is a security feature
// implemented by browsers that restricts web pages from making requests to a
// different origin (domain) than the one from which it was served. Therefore, when
// trying to call Swiggy's API from localhost, the browser blocks the request due to
// CORS restrictions.

//Shimmer UI is a technique that shows placeholder content while data is loading,
// reducing wait time and keeping users engaged.

const UseEffect = () => {
  const [jobValue, setJobValue] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://65d8d211c96fbb24c1bc608f.mockapi.io/jobprofile"
    );
    const json = await data.json();
    setJobValue(json);
    setFilteredSearch(json);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          value={searchText}
          className="search-input"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button bg-slate-100"
          onClick={() => {
            const filteredSearch = jobValue.filter((e) => {
              return e.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setFilteredSearch(filteredSearch);
          }}
        >
          search
        </button>
      </div>
      <div className="container gap-2 p-2">
        {filteredSearch.map((val) => (
          <Card key={val.id} info={val} />
        ))}
      </div>
    </>
  );
};

export default UseEffect;
