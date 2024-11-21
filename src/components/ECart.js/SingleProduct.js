import React from "react";
import { StarComponent } from "../machinecoding/Star";
import { CartState } from "../../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[30%] m-[10px]">
      <img class="rounded-t-lg object-cover" src={prod.image} alt="" />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {prod.name}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          ₹ {prod.price.split(".")[0]}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {prod.fastDelivery ? "fast Delivery" : "4 days delivery"}
        </p>
        <p className="mb-4">
          <StarComponent starCount={prod.ratings} clickable={false} />
        </p>
        {cart.some((c) => c.id === prod.id) ? ( //allows you to use a callback function, giving you more control over what you are checking for, including complex conditions. includes check for primitive data strings or number in an array or strings.
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            disabled={!prod.inStock}
            onClick={()=>dispatch({
              type:"REMOVE_FROM_CART",
              payload:prod
            })}
          >
            {!prod.inStock ? "Out of Stock" : "Remove from cart"}
          </button>
        ) : (
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={!prod.inStock}
            onClick={()=>dispatch({
              type: "ADD_TO_CART",
              payload: prod,
            })}
          >
            {!prod.inStock ? "Out of Stock" : "Add to Cart"}
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
