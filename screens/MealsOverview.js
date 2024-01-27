import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverview({ route }) {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId);
  });
  const renderMeal = (renderItem) => {
    console.log("renderItem", renderItem);
    return <MealItem title={renderItem.item.title} />;
  };
  return (
    <View>
      <FlatList
        keyExtractor={(itemData) => itemData.id}
        renderItem={renderMeal}
        data={displayMeals}
      />
    </View>
  );
}

export default MealsOverview;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
