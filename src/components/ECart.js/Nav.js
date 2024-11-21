import { Search, ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../../context/Context";

const Nav = () => {
  const {
    state: { cart },
    productDispatch,
    productState: { searchQuery },
  } = CartState();
  return (
    <div className="flex items-center justify-center w-full  mt-4">
      <div className="flex items-center justify-center w-[80%]">
        <input
          type="text"
          className="border-2 border-solid border-black mr-2 p-1 w-1/3 rounded-md"
          value={searchQuery}
          onChange={(e) => {
            productDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            });
          }}
        />
        <button className="">
          <Search />
        </button>
      </div>
      <div className="">
        <Link to={"cart"}>
          <button className="p-1 rounded-md bg-green-500">
            <ShoppingCart className="inline-flex text-white" />
            <span className="ml-2 mr-2 text-white">{cart.length}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
