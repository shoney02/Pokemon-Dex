import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <Logo src="src/assets/logo.png" alt="logo" />
      <Button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</Button>
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
  width: 90vw;
  max-width: 600px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgb(255, 0, 0);
  color: white;
  border: none;
  transition: background-color 0.3s;
`;
