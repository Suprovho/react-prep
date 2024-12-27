import React, { useState } from "react";

const data = [
  { rows: 5, col: 5, name: "Luxury" },
  { rows: 6, col: 6, name: "General" },
  { rows: 8, col: 8, name: "Economy" },
];

const Ticket = () => {
  const [userSeat, setUserSeat] = useState({});

  // const ans1=Array(5);

  // const final=[...ans1].map((_,index)=>index)

  // console.log(final);

  //  const ans=[...Array(5)].map((_,index)=>index);

  //  console.log(ans);

  const handelSeat = (category, row, col) => {
    const seatInfo = `${category}-${row}-${col}`;
    setUserSeat((prev) => {
      const prevInfo = { ...prev };
      if (prevInfo[seatInfo]) {
        delete prevInfo[seatInfo]; // delete the property if already present
      } else if (Object.keys(prevInfo).length === 5) {
        alert("Maximum seat limit 5 is crossed!");
      } else {
        prevInfo[seatInfo] = true; // adding new property  SeatInfo and its value.
      }
      return prevInfo;
    });
  };

  const isSelected = (category, row, col) => {
    return userSeat[`${category}-${row}-${col}`];
  };

  const confirmBooking = () => { 
    const finalSeat = Object.keys(userSeat)
      .map((e) => e.split(","))
      .join(", ");
    alert(finalSeat);
  };

  return (
    <div className="m-4 p-4 flex flex-col justify-center items-center">
      {data.map((data) => (
        <div
          key={data.name}
          className="flex flex-col items-center justify-center"
        >
          <h3 className="text-center font-bold text-2xl">{data.name}</h3>
          <div className="m-4 flex flex-col flex-wrap w-full justify-center items-center">
            {[...Array(data.rows)].map((_, index) => (
              <div
                className="flex m-4 items-center justify-evenly border-e-2 border-black border-solid w-full"
                key={index}
              >
                {[...Array(data.col)].map((_, ColIndex) => (
                  <div
                    key={ColIndex}
                    className={`border-2 border-r-0  w-full p-2 border-solid border-black cursor-pointer ${
                      isSelected(data.name, index + 1, ColIndex + 1)
                        ? `bg-red-500 text-white`
                        : ``
                    }`}
                    onClick={() =>
                      handelSeat(data.name, index + 1, ColIndex + 1)
                    }
                  >
                    {ColIndex + 1}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        className="p-2 bg-slate-100 border-2 border-solid border-black hover:bg-black hover:text-white rounded-lg"
        onClick={confirmBooking}
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default Ticket;
