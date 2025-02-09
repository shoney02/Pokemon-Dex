import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myPokemons: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.myPokemons.length >= 6) {
        alert("최대 6마리까지만 추가할 수 있습니다!");
        return;
      }
      if (state.myPokemons.some((p) => p.id === action.payload.id)) {
        alert("이미 선택된 포켓몬입니다!");
        return;
      }
      state.myPokemons.push(action.payload);
    },
    removePokemon: (state, action) => {
      state.myPokemons = state.myPokemons.filter(
        (p) => p.id !== action.payload
      );
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
