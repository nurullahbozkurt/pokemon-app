import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";

import Home from "./pages/Home";
import PokemonInfo from "./pages/PokemonInfo";

function App() {
  return (
    <>
      <div id="container" className="md:flex m-auto">
        <div className="mobileSidebar m-auto">
          <Link to="/" className="flex justify-center items-center">
            <img className="h-20" src="img/pokemon.png" alt=""></img>
          </Link>
        </div>
        <div className="sidebar">
          <Link to="/" className=" flex-col justify-center items-center ">
            <img
              className="mt-10 hover:scale-105 hover:transition-shadow hover:translate-x-1"
              src="img/pokemon.png"
              alt=""
            ></img>
            <img
              className="w-2/4 m-auto hover:scale-105 hover:transition-shadow hover:translate-x-1 mt-10 mb-10 "
              src="img/poke-topu.png"
              alt=""
            ></img>
          </Link>

          <Link
            to="/"
            className="text-gray-300 font-bold border-2 border-gray-800 hover:bg-red-800 mt-3 rounded w-1/2 flex justify-center m-auto"
          >
            HOME
          </Link>
        </div>
        <div className="main w-full md:ml-[20%] m-auto ">
          <div id="pokemons">
            <Switch>
              <Route path="/:pokemonName" component={PokemonInfo} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
