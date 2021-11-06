import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: [],
};

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    setIngredients: (state, action) => {
      state.ingredients.push(action.payload.selectedIngredients);
    },
  },
});

export const { setIngredients } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
