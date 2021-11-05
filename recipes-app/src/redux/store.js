import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipe";
import ingredientsReducer from "./ingredients";

export default configureStore({
  reducer: {
    recipe: recipeReducer,
    ingrediendtList: ingredientsReducer,
  },
});
