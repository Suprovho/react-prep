import { useState } from "react";
import { rawTrainsData } from "../../utils/constant,";

const Train = () => {
  const [data, setData] = useState(rawTrainsData);
  const [date, setDate] = useState("");
  const [selectedTrain, setSelectedTrain] = useState(null);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setSelectedTrain(null);
  };

  const handleSeatBooking = (selectedTrainId, seatIndex) => {
    setData((prevData) => // line fix.. prev we were no returning properly
      prevData.map((train) => {
        if (train.trainId === selectedTrainId) {
          const updatedSeats = train.seats.map((seat, index) => {
            if (index === seatIndex && !seat.isBooked && !seat.isPWD) {
              return { ...seat, isBooked: true };
            }
            return seat;
          });

          return {
            ...train,
            seats: updatedSeats,
            availableSeats: train.availableSeats - 1,
          };
        }
        return train;
      })
    );
  };

  const filteredData = data.filter((train) => train.date === date);

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold ">Train Booking System</h1>
      <div className="flex gap-2 items-center">
        <label className="font-semibold text-lg">Select date</label>
        <input
          type="date"
          className="border-2 border-solid border-gray-400 w-[55%] p-1 rounded-xl"
          onChange={handleDateChange}
          value={date}
        />
      </div>
      <ul className="text-center list-disc">
        <h1 className="font-medium text-xl p-4">
          Trains available on - {date}:
        </h1>
        {filteredData.length > 0 ? (
          filteredData.map((train) => (
            <li
              key={train.trainId}
              className="text-center m-4 text-lg text-pretty"
            >
              {train.name}
              <span className="font-bold text-green-500">
                {" "}
                - available seats: {train.availableSeats}{" "}
              </span>
              <button
                className="border-2 border-solid border-gray-400 p-1 ml-3 rounded-lg hover:shadow-lg hover:bg-gray-900 hover:text-white"
                onClick={() => setSelectedTrain(train.trainId)}
              >
                View Seats
              </button>
            </li>
          ))
        ) : (
          <h1 className="text-red-600 font-bold">No trains available on this date</h1>
        )}
      </ul>

      {selectedTrain && (
        <div className="mb-4 flex flex-col items-center justify-center">
          <h3 className="text-lg font-medium p-2">
            Seats for Train -{" "}
            {data.find((train) => train.trainId === selectedTrain)?.name}
          </h3>
          <div className="rounded-lg flex justify-evenly items-center flex-wrap w-[200px] mr-[10px] m-0 p-2 border-2 border-black border-solid">
            {data
              .find((train) => train.trainId === selectedTrain)
              ?.seats.map((seat, index) => (
                <div
                  className={`seat ${
                    seat.isBooked
                      ? "booked"
                      : seat.isPWD
                      ? "reserved-pwd"
                      : "available"
                  }`}
                  key={index}
                  onClick={() =>
                    !seat.isBooked && !seat.isPWD && handleSeatBooking(selectedTrain, index)
                  }
                >
                  {seat.isBooked ? "X" : seat.isPWD ? "PWD" : "O"}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Train;
