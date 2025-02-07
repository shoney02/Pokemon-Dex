import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonBall = ({ pokemon, addPokemon }) => {
  return (
    <Container>
      {pokemon ? (
        <PokemonCard data={pokemon} addPokemon={addPokemon} />
      ) : (
        <Ball src="/src/assets/pokeball.png" alt="Pokeball" />
      )}
    </Container>
  );
};

export default PokemonBall;

const Container = styled.div`
  min-width: 120px;
  min-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 2px dashed #cccccc;
  border-radius: 10px;
`;

const Ball = styled.img`
  width: 60px;
`;
