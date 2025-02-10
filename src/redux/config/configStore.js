import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../slices/pokemonSlice";

// localStorage에서 기존 데이터 불러오기
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("pokemonState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error("로컬 스토리지에서 상태를 불러오는 중 오류 발생:", err);
    return undefined;
  }
};

// 상태를 localStorage에 저장하는 미들웨어
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.pokemon);
    localStorage.setItem("pokemonState", serializedState);
  } catch (err) {
    console.error("로컬 스토리지에 상태 저장 중 오류 발생:", err);
  }
};

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
  preloadedState: { pokemon: loadState() }, // Redux 초기 상태를 localStorage에서 불러오기
});

store.subscribe(() => saveState(store.getState())); // 상태 변경 시 저장

export default store;
