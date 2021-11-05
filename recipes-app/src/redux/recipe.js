import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "maja",
  source: "",
  ingredients: [],
  time: "",
  instructions: "",
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipe: (state, action) => {
      state.name = action.payload.name;
      state.source = action.payload.source;
      state.ingredients = action.payload.ingredients;
      state.instructions = action.payload.instructions;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRecipe } = recipeSlice.actions;
export const selectUser = (state) => state.recipe.name;

export default recipeSlice.reducer;
