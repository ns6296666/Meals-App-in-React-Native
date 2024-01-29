import React, { useContext, useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/mealDetail/Subtitle";
import List from "../components/mealDetail/List";
import IconButton from "../components/IconButton";
//import { FavoriteContext } from "../store/context/Favorite-Context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/Favorite";

function EachMealDetails({ route, navigation }) {
  //   const FavoriteMealsIds = useContext(FavoriteContext);
  const dispatch = useDispatch();
  const FavoriteMealsIds = useSelector((state) => state.FavoriteMeals.ids);
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const MealIsFavorite = FavoriteMealsIds.includes(mealId);

  const ChangeFavoriteMealStatus = () => {
    if (MealIsFavorite) {
      //FavoriteMealsIds.removeFavorite(id);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      //FavoriteMealsIds.addFavorite(id);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={ChangeFavoriteMealStatus}
            icon={MealIsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, ChangeFavoriteMealStatus]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default EachMealDetails;
const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: { width: "100%", height: 350 },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#fff",
  },
  detailText: { color: "#fff" },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: { width: "80%" },
});
