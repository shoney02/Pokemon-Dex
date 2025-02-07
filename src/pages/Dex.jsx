import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../Data/MOCK_DATA";
import styled from "styled-components";

const Dex = () => {
  const [myPokemons, setMyPokemons] = useState([]);

  // 포켓몬 추가 함수
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

  // 포켓몬 삭제 함수
  const removePokemon = (id) => {
    setMyPokemons(myPokemons.filter((pokemon) => pokemon.id !== id));
  };

  return (
    <div>
      <Dashboard myPokemons={myPokemons} removePokemon={removePokemon} />
      <PokemonList data={MOCK_DATA} addPokemon={addPokemon} />
    </div>
  );
};

export default Dex;

// const Wrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
//   margin: 20px;
// `;
