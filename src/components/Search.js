import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/app";

function Search() {
  const { change } = useContext(AppContext);

  return (
    <>
      <div className="filter w-5/6 m-auto pt-10 ">
        <input
          onChange={(e) => {
            change(e.target.value);
          }}
          className="border-2  rounded-2xl border-gray-700 p-3 w-full m-auto shadow-2xl bg-red-50 outline-none focus:bg-blue-100"
          placeholder="search to pokemon.."
        ></input>
      </div>
    </>
  );
}

export default Search;
