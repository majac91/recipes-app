import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredients";

export default configureStore({
  reducer: {
    ingrediendtList: ingredientsReducer,
  },
});
