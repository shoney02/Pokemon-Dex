import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../Data/MOCK_DATA";
import { usePokemon } from "../context/PokemonContext";

const Dex = () => {
  const { addPokemon } = usePokemon();

  return (
    <div>
      <Dashboard />
      <PokemonList data={MOCK_DATA} addPokemon={addPokemon} />
    </div>
  );
};

export default Dex;
