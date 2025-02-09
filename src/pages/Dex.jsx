import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../Data/MOCK_DATA";
import { addPokemon, removePokemon } from "../redux/slices/pokemonSlice";


const Dex = () => {
  const dispatch = useDispatch();
  const myPokemons = useSelector((state) => state.pokemon.myPokemons);

  return (
    <div>
      <Dashboard
        myPokemons={myPokemons}
        removePokemon={(id) => dispatch(removePokemon(id))}
      />
      <PokemonList
        data={MOCK_DATA}
        addPokemon={(pokemon) => dispatch(addPokemon(pokemon))}
      />
    </div>
  );
};

export default Dex;
