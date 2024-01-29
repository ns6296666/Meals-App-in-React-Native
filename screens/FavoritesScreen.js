import React, { useContext } from "react";
import { Text } from "react-native";
import { FavoriteContext } from "../store/context/Favorite-Context";

function FavoritesScreen() {
  const FavoriteMeals = useContext(FavoriteContext);
  return <Text>Favorites Screen</Text>;
}

export default FavoritesScreen;
