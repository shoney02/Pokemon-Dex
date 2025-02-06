import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <Character
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        alt="character"
      />
      <Name>이상해씨</Name>
      <Description>타입 : 풀, 독</Description>
      <Description>
        풀과 독 타입의 포켓몬으로, 귀여운 식물 모양을 하고 있습니다.
      </Description>
      <Button
        label="뒤로 가기"
        background="black"
        handleClick={() => navigate("/dex")}
      />
    </Wrap>
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
