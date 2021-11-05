import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: [],
};

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    setIngredients: (state, action) => {
      state.ingredients = action.payload.selectedIngredients;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIngredients } = ingredientsSlice.actions;
export const selectIngredients = (state) => state.ingredients.ingredients;

export default ingredientsSlice.reducer;
