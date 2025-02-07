// addPokemon 함수를 사용해 포켓몬을 선택할 수 있도록 하고, 선택된 포켓몬이 Dashboard에 추가되도록 구현합니다.
// 최대 6개의 포켓몬만 선택할 수 있게 제한합니다.
// 선택된 포켓몬 표시

import React from "react";
import PokemonBall from "./PokemonBall";
import styled from "styled-components";

const Dashboard = ({ myPokemons, removePokemon }) => {
  return (
    <Container>
      <Title>나만의 포켓몬</Title>
      <BallContainer>
        {myPokemons.map((pokemon) => (
          <PokemonBall key={pokemon.id} pokemon={pokemon} removePokemon={removePokemon} />
        ))}
        {/* 6칸 유지하기 위해 빈 칸 표시 */}
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
