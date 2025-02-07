// MOCK_DATA에서 데이터를 가져와 PokemonList에 전달하고, 포켓몬 리스트를 PokemonCard 형태로 보여줍니다.
// 포켓몬 개별 카드

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonCard = ({ data, addPokemon }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/detail/${data.id}`)}>
      <Character src={data.img_url} />
      <Name>{data.korean_name}</Name>
      <Description>No. {String(data.id).padStart(3, "0")}</Description>
      <Button
        onClick={(e) => {
          e.stopPropagation(); // 클릭 이벤트가 부모(container)로 전파되지 않도록 방지지
          addPokemon(data);
        }}
      >
        추가
      </Button>
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
  cursor: pointer;

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

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: rgb(255, -2, 0);
  color: rgb(255, 255, 255);
  border-radius: 5px;
`;
