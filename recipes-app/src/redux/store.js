import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import ingredientsReducer from "./ingredients";
import recipeListReducer from "./recipeList";

const reducers = combineReducers({
  ingrediendtList: ingredientsReducer,
  recipeList: recipeListReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['ingrediendtList']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
