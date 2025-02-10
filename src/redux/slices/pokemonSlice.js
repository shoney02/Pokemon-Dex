import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

// 로컬 스토리지에서 데이터 불러오기
const loadState = () => {
  try {
    const storedState = localStorage.getItem("pokemonState");
    return storedState ? JSON.parse(storedState) : { myPokemons: [] };
  } catch (err) {
    console.error("로컬 스토리지에서 상태를 불러오는 중 오류 발생:", err);
    return { myPokemons: [] };
  }
};

// 초기 상태
const initialState = loadState();

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.myPokemons.length >= 6) {
        toast.error("최대 6마리까지만 추가할 수 있습니다!");
        return;
      }
      if (state.myPokemons.some((p) => p.id === action.payload.id)) {
        toast.warning("이미 선택된 포켓몬입니다!");
        return;
      }
      state.myPokemons.push(action.payload);
      toast.success(`${action.payload.korean_name} 추가됨!`);
      localStorage.setItem("pokemonState", JSON.stringify(state)); // 로컬 스토리지에 저장
    },

    removePokemon: (state, action) => {
      Swal.fire({
        title: "포켓몬 삭제",
        text: "정말 삭제하시겠습니까?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "삭제",
        cancelButtonText: "취소",
      }).then((result) => {
        if (result.isConfirmed) {
          state.myPokemons = state.myPokemons.filter(
            (p) => p.id !== action.payload
          );
          toast.info("포켓몬이 삭제되었습니다.");
          localStorage.setItem("pokemonState", JSON.stringify(state)); // 로컬 스토리지에 저장
        }
      });
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
