import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Pokemon = (pokemon) => {
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${pokemon.pokemon.url}`);
      setUrl(response.data);
    })();
  }, [pokemon]);

  const [url, setUrl] = useState(null);

  return (
    <>
      <Link
        to={`/${pokemon.pokemon.name}`}
        className="w-56 h-56 border-2 border-gray-500 bg-red-50 rounded-full  flex-col items-center justify-center m-auto hover:transition-shadow shadow-2xl hover:scale-105 mt-10 "
      >
        <img
          className="w-4/5 flex items-center justify-center m-auto max-h-[180px]"
          src={url && url.sprites.other.dream_world.front_default}
          alt=""
        ></img>
        <p className="flex justify-center items-center text-red-700 font-semibold lowercase">
          {pokemon.pokemon.name}
        </p>
      </Link>
    </>
  );
};

export default Pokemon;
