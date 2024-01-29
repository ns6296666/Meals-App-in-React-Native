import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/Favorite-Context";
import MealsList from "../components/MealList/MealsList";

function FavoritesScreen() {
  const { ids } = useContext(FavoriteContext);
  const FavoritesMeals = MEALS.filter((meal) => ids.includes(meal.id));
  console.log("FavoritesMeals screen ", FavoritesMeals);

  if (FavoritesMeals.length === 0) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={FavoritesMeals} />;
}

export default FavoritesScreen;
const styles = StyleSheet.create({
  textContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
});
