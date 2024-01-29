import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../redux/Favorite";

export const store = configureStore({
  reducer: { FavoriteMeals: favoriteReducer },
});
