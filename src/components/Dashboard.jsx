// addPokemon 함수를 사용해 포켓몬을 선택할 수 있도록 하고, 선택된 포켓몬이 Dashboard에 추가되도록 구현합니다.
// 최대 6개의 포켓몬만 선택할 수 있게 제한합니다.

import React from "react";
import PokemonBall from "./PokemonBall";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Container>
      <Title>나만의 포켓몬</Title>
      <BallContainer>
        <PokemonBall />
        <PokemonBall />
        <PokemonBall />
        <PokemonBall />
        <PokemonBall />
        <PokemonBall />
      </BallContainer>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
`;

const Title = styled.p`
  font-size: 24px;
`;

const BallContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  overflow: scroll;
`;
