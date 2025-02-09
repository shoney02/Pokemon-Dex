import React from "react";
import PokemonBall from "./PokemonBall";
import styled from "styled-components";
import { usePokemon } from "../context/PokemonContext";

const Dashboard = () => {
  const { myPokemons, removePokemon } = usePokemon();

  return (
    <Container>
      <Title>나만의 포켓몬</Title>
      <BallContainer>
        {myPokemons.map((pokemon) => (
          <PokemonBall
            key={pokemon.id}
            pokemon={pokemon}
            removePokemon={removePokemon}
          />
        ))}
        {Array(6 - myPokemons.length)
          .fill(null)
          .map((_, index) => (
            <PokemonBall key={index} />
          ))}
      </BallContainer>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
`;

const Title = styled.p`
  font-size: 24px;
  text-align: center;
`;

const BallContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  min-height: 180px;
`;
