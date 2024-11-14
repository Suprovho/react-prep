import React, { useState } from "react";

const items = [
  "chocolate",
  "sweet",
  "teddy",
  "cloth",
  "food coupon",
  "fire crackers",
  "decorations",
];

const Gift = () => {
  const [friendName, setFriendName] = useState("");
  const [friendData, setFriendData] = useState([]);
  const [gift, setGift] = useState([]);
  const [assign, setAssign] = useState(false);

  const handelAssignGift = () => {
    if (!assign) {
      const assignGift = friendData.map((friend) => {
        const Random = Math.floor(Math.random() * items.length);
        const RandomGift = items[Random];
        return { friend: friend, gift: RandomGift }; // new es6 notation if value and key name are same we can add like this friend
      });
      setGift(assignGift);
      setAssign(true);
    } else {
      alert("item can not be assigned to update use shuffle or reset");
    }
  };

  const handelShuffle = () => {
    const assignGift = friendData.map((friend) => {
      const Random = Math.floor(Math.random() * items.length);
      const RandomGift = items[Random];
      return { ...friend, gift: RandomGift };
    });
    setGift(assignGift);
  };

  const handelReset = () => {
    setGift([]);
    setAssign(false);
    setFriendName("");
  };

  const handelFriendsData = (index) => {
    setFriendData((prev) => prev.filter((_, i) => i !== index));
    setGift((prev) => prev.filter((_, i) => i !== index));
    setAssign(false);
  };

  return (
    <div className="p-2 m-2 flex flex-col justify-center items-center">
      <div className="p-2 m-2 flex gap-2 justify-center items-center mt-10">
        <input
          type="text"
          placeholder="enter friend name"
          onChange={(e) => setFriendName(e.target.value)}
          value={friendName}
          className="border-2 border-solid border-black rounded-md p-1"
        />
        <button
          className="p-1 border-2 border-solid border-black rounded-md"
          onClick={() => setFriendData([...friendData, friendName])}
        >
          Add person
        </button>
      </div>
      {friendData && (
        <div className="flex flex-col gap-2">
          {friendData.map((friend, index) => (
            <>
              <h3 className="" key={friend}>
                {friend}-
                {gift.length > 0 && gift[index] && gift[index].gift
                  ? gift[index].gift
                  : "No gift assigned"}
                <span
                  className="ml-2 cursor-pointer"
                  onClick={() => handelFriendsData(index)}
                >
                  &#x2715;
                </span>
              </h3>
            </>
          ))}
        </div>
      )}
      <div className="flex gap-2 mt-4">
        <button
          className="p-1 border-2 border-solid border-black rounded-md"
          onClick={handelAssignGift}
        >
          Assign Gift
        </button>
        <button
          className="p-1 border-2 border-solid border-black rounded-md"
          onClick={handelShuffle}
        >
          Shuffle
        </button>
        <button
          className="p-1 border-2 border-solid border-black rounded-md"
          onClick={handelReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Gift;
