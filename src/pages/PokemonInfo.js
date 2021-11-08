import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "../components/progressBar/Progressbar";

function PokemonInfo() {
  const { pokemonName } = useParams();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      setDetails(response.data);
    })();
  }, [pokemonName]);

  const [details, setDetails] = useState(null);

  return (
    <>
      <div className="header grid md:grid-cols-2 pt-20 md:pt-0 m-auto  ">
        <div className="header-left p-5 bg-red-50  rounded-full flex items-center justify-center border-2 border-gray-500 flex-col m-auto hover:transition-shadow shadow-2xl hover:scale-105 mt-10 ">
          <img
            src={details && details.sprites.other.dream_world.front_default}
            alt=""
          ></img>
          <span className="font-semibold ">{pokemonName}</span>
        </div>
        <div className="header-right flex items-center justify-center mt-10 m-auto  ">
          <div className="flex-col items-center justify-center m-auto ">
            <span className="font-bold text-red-900">STATS</span>
            {details &&
              details.stats.map((item, index) => (
                <ProgressBar
                  key={index}
                  width={"200px"}
                  value={item.base_stat}
                  stats={item.stat.name}
                />
              ))}
            <div>
              <span className="font-bold text-red-900 ">ABILITIES</span>
            </div>
            {details &&
              details.abilities.map((item, index) => (
                <div
                  className="bg-gray-200 border rounded shadow-xl"
                  key={index}
                >
                  <span className="font-semibold p-2 ">
                    {item.ability.name}
                  </span>{" "}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div>
        <div className="mt-10">
          <span className="font-bold text-red-900 flex justify-center text-2xl">
            MOVES
          </span>
        </div>
        <ul className="grid grid-cols-6 border p-3 shadow-xl border-red-900 rounded  ">
          {details &&
            details.moves.map((item, index) => (
              <button
                key={index}
                className="border p-2 rounded hover:font-bold bg-red-900 text-white shadow-xl hover:bg-white hover:text-red-900 text-xs sm:text-sm"
              >
                {item.move.name}
              </button>
            ))}
        </ul>
      </div>
    </>
  );
}

export default PokemonInfo;
