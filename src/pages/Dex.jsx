import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../Data/MOCK_DATA";
import styled from "styled-components";

const Dex = () => {
  return (
    <div>
      <Dashboard />
      <PokemonList data={MOCK_DATA} />
    </div>
  );
};

export default Dex;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px;
`;
