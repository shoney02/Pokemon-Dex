// MOCK_DATA에서 데이터를 가져와 PokemonList에 전달하고, 포켓몬 리스트를 PokemonCard 형태로 보여줍니다.

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styled from "styled-components";

const PokemonCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/detail/${data.id}`)}>
      <Character src={data.img_url} />
      <Name>{data.korean_name}</Name>
      <Description>No. {String(data.id).padStart(3, "0")}</Description>
      <Button type="sub" background="red" label="추가" handleClick={() => {}} />
    </Container>
  );
};

export default PokemonCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  padding: 10px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  }
`;

const Character = styled.img`
  width: 100px;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #000000;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666666;
`;
