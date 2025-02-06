import React from "react";
import styled from "styled-components";

const PokemonBall = () => {
  return (
    <Container>
      <Ball src="/src/assets/pokeball.png" />
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
