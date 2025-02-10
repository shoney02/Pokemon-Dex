import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removePokemon } from "../redux/slices/pokemonSlice";
import PokemonBall from "./PokemonBall";
import styled from "styled-components";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Dashboard = () => {
  const dispatch = useDispatch();
  const myPokemons = useSelector((state) => state.pokemon.myPokemons);

  const handleRemovePokemon = (id) => {
    Swal.fire({
      title: "포켓몬 삭제",
      text: "정말 삭제하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removePokemon(id));
        toast.info("포켓몬이 삭제되었습니다.");
      }
    });
  };

  return (
    <Container>
      <Title>나만의 포켓몬</Title>
      <BallContainer>
        {myPokemons.map((pokemon) => (
          <PokemonBall
            key={pokemon.id}
            pokemon={pokemon}
            removePokemon={() => handleRemovePokemon(pokemon.id)}
          />
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
