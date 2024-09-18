import React, { useEffect, useState } from "react";
import Album from "./Album";

const Unkown = () => {
  const API_KEY =
    "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=120";

  const [modifiedObj, setModifiedObj] = useState({});
  const [view, setview] = useState(false);
  const [albumId, setAlbumId] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_KEY);
    const json = await data.json();

    const albumData = json.reduce((acc, curr) => {
      if (!acc[curr.albumId]) {
        acc[curr.albumId] = [];
      }

      acc[curr.albumId].push(curr);

      return acc;
    }, {});

    setModifiedObj(albumData);
  };

  console.log(modifiedObj);

  const handelView = (albumId) => {
    setview(true);
    setAlbumId(albumId);
  };

  return (
    <>
    <div className="flex justify-center items-center gap-1 max-h-dvh ">
      <h1 className="text-center text-2xl font-medium">Albums 🖼️</h1>
      {Object.keys(modifiedObj).map((albumId) => (
        <button
          key={albumId}
          className="p-4 w-[10%] border-2 border-black mt-[15%] shadow-lg hover:bg-slate-100"
          onClick={()=>handelView(albumId)}
        >
          {albumId}
        </button>
      ))}
    </div>
    {view && <Album data={modifiedObj} albumId={albumId} />}
    </>
  );
};

export default Unkown;
