import React, { useEffect, useState } from "react";
import { CartState } from "../../context/Context";
import { StarComponent } from "../machinecoding/Star";
import { Minus, Plus, Trash2 } from "lucide-react";
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + Number(curr.price.split(".")[0]) * curr.qty,
        0
      )
    );
  }, [cart]);

  return (
    <div className="flex justify-between mt-4">
      <div className="">
        <ul class="w-[70%] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {cart.map((prod) => (
            <li
              class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 inline-flex items-center justify-evenly"
              key={prod.id}
            >
              <img
                class="rounded-t-lg object-cover w-36"
                src={prod.image}
                alt=""
              />
              <p>{prod.name}</p>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                ₹ {prod.price.split(".")[0]}
              </p>
              <p className="">
                <StarComponent starCount={prod.ratings} clickable={false} />
              </p>
              <span
                className="cursor-pointer"
                onClick={() =>
                  dispatch({
                    type: "CHANGE_QTY",
                    payload: { id: prod.id, qty: prod.qty + 1 },
                  })
                }
              >
                <Plus strokeWidth={3} />
              </span>
              <p className="text-lg">{prod.qty}</p>
              {prod.qty!==1&&(<span
                className="cursor-pointer"
                onClick={() =>
                  dispatch({
                    type: "CHANGE_QTY",
                    payload: { id: prod.id, qty: prod.qty - 1 },
                  })
                }
              >
                <Minus strokeWidth={3} />
              </span>
              )}
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                disabled={!prod.inStock}
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  })
                }
              >
                <Trash2 />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="filters summary flex flex-col gap-6">
        <span className="text-2xl font-bold">
          subTotal ({cart.length}) Items
        </span>
        <span className="font-semibold">Total: ₹ {total}</span>
        <button className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Proceed To Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
