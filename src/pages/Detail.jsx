import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import MOCK_DATA from "../Data/MOCK_DATA";

// 포켓몬 디테일 페이지
const Detail = () => {
  const navigate = useNavigate();

  const param = useParams();

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    setPokemon(MOCK_DATA.find((item) => item.id === Number(param.id)));
  }, [param.id]);

  return (
    <>
      {pokemon && (
        <Wrap>
          <Character src={pokemon.img_url} alt="character" />
          <Name>{pokemon.korean_name}</Name>
          <Description>
            타입 :{" "}
            {pokemon.types.map((type, index) => {
              return index < pokemon.types.length - 1 ? `${type}, ` : type;
            })}
          </Description>
          <Description>{pokemon.description}</Description>
          <Button
            label="뒤로 가기"
            background="black"
            handleClick={() => navigate("/dex")}
          />
        </Wrap>
      )}
    </>
  );
};

export default Detail;

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Character = styled.img`
  width: 200px;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #ff0000;
`;

const Description = styled.p`
  font-size: 16px;
`;

// {
//     img_url:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//     korean_name: "이상해씨",
//     types: ["풀", "독"],
//     id: 1,
//     description: "풀과 독 타입의 포켓몬으로, 귀여운 식물 모양을 하고 있습니다.",
//   },
