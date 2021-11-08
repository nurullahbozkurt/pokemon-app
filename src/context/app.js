import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";

export const AppContext = React.createContext();

const AppContextProvider = (props) => {
  const [state, setState] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100"
    );
    setState(response.data);
  };

  const change = (target) => {
    setSearch(target);
  };

  const searchRemove = () => {
    setSearch();
  };

  const filtered = useMemo(() => {
    if (!search) {
      if (state?.results) {
        return state.results;
      }

      return [];
    }

    return state.results.filter((item) => item.name.includes(search));
  }, [search, state]);

  return (
    <AppContext.Provider
      value={{ state, change, search, searchRemove, filtered }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
