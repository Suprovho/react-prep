import React from "react";
import { StarComponent } from "../machinecoding/Star";
import { CartState } from "../../context/Context";

const Fillters = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort},
  } = CartState();
console.log(byStock);

  const handleStarChange = (value) => {
    productDispatch({
      type: "FILTER_BY_RATING",
      payload: value,
    });
  };

  return (
    <div className="filters">
      <h1 className="text-2xl font-bold mb-6">Apply Filters</h1>
      <div className="flex items-center mb-4">
        <input
          id="default-radio-1"
          type="radio"
          value="lowToHigh"
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={() => {
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            });
          }}
        />
        <label
          for="default-radio-1"
          className="ms-2 text-sm font-medium text-white dark:text-gray-300"
        >
          Ascending
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          id="default-radio-1"
          type="radio"
          value={sort}
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
        />
        <label
          for="default-radio-1"
          className="ms-2 text-sm font-medium  dark:text-gray-300"
        >
          Descending
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
        <label
          for="default-checkbox"
          className="ms-2 text-sm font-medium dark:text-gray-300"
        >
          Include Out of Stock
        </label>
      </div>

      <div className="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
        <label
          for="default-checkbox"
          className="ms-2 text-sm font-medium  dark:text-gray-300"
        >
          Fast Delivery only
        </label>
      </div>
      <div className=" flex items-center mb-4">
        <StarComponent clickable={true} onChange={handleStarChange} />  
      </div>
      <button
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Clear to Filters
        </span>
      </button>
    </div>
  );
};

export default Fillters;
