// refer the pdf.

import React, { useState } from "react";
import { useEffect } from "react";
import Card, { Hoc } from "./card";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";


// ‘ useEffect() ’ is a Hook React provides
// us, it is a regular JavaScript function, to help manage our components.

// useEffect() ' takes two arguments .
// 1. Callback function.
// 2. Dependency Array.

// it render one time if dependency array is empty and if no dependency array is present than it get call every time the component is rendered.

//Callback function is getting called after the whole component get rendered.
//fetch() ’ always return promise to us

//* CORS (Cross-Origin Resource Sharing) is a security feature
//* implemented by browsers that restricts web pages from making requests to a
//* different origin (domain) than the one from which it was served. Therefore, when
//* trying to call Swiggy's API from localhost, the browser blocks the request due to
//* CORS restrictions.

// Shimmer UI is a technique that shows placeholder content while data is loading,
// reducing wait time and keeping users engaged.

// do not declare hooks outside component.

// use state is used to create local variables inside components.

// use state should be called on the top.

// don,t use state variable inside if else,loops and normal functions.

const UseEffect = () => {
  const [jobValue, setJobValue] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [searchText, setSearchText] = useState("");

  const PromotedCard = Hoc(Card);

  // const dispatch=useDispatch();

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

  
 // subscribing to the store.

  const Users=useSelector((store)=>store.users.users);
  console.log(Users);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>You are offline!!</h1>;
  }

  return (
    <>
      <div className="search">
        <input
          type="text"
          value={searchText}
          className="search-input border-2 border-solid border-black"
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
          <Link to={"/about"}>
            {val.promoted ? (
              <Card info={val} key={val.id} />
            ) : (
              <PromotedCard info={val} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

// * spa ->
// It's a type of web ->

// application or website that interacts with the user by
// dynamically rewriting the current web page rather than loading
// entire new pages from the server. In other words, a single
// HTML page is loaded initially, and then the content is updated
// dynamically as the user interacts with the application, typically
// through JavaScript.

export default UseEffect;
