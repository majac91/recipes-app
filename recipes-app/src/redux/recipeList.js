import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipeList: null,
};

export const recipeListSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipeList: (state, action) => {
      state.recipeList = action.payload;
    },
  },
});

export const { setRecipeList } = recipeListSlice.actions;

export default recipeListSlice.reducer;
