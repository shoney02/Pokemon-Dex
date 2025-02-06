// MOCK_DATA에서 데이터를 가져와 PokemonList에 전달하고, 포켓몬 리스트를 PokemonCard 형태로 보여줍니다.

import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonList = ({ data }) => {
  return (
    <Container>
      {data.map((pokemon) => {
        return <PokemonCard key={pokemon.id} data={pokemon} />;
      })}
    </Container>
  );
};

export default PokemonList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
`;
