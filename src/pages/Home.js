import React from "react";
import { useContext } from "react";

import Search from "../components/Search";
import Pokemon from "../components/Pokemon";
import { AppContext } from "../context/app";

const MapPokemon = () => {
  const { filtered } = useContext(AppContext);

  return (
    <>
      <div className="search w-full pt-20 md:pt-0 ">
        <Search />
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1">
        {filtered &&
          filtered.map((item, index) => <Pokemon pokemon={item} key={index} />)}
      </div>
    </>
  );
};

export default MapPokemon;
