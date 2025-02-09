import { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [myPokemons, setMyPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    if (myPokemons.length >= 6) {
      alert("최대 6마리까지만 추가할 수 있습니다!");
      return;
    }
    if (myPokemons.some((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다!");
      return;
    }
    setMyPokemons([...myPokemons, pokemon]);
  };

  const removePokemon = (id) => {
    setMyPokemons(myPokemons.filter((pokemon) => pokemon.id !== id));
  };

  return (
    <PokemonContext.Provider value={{ myPokemons, addPokemon, removePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};
