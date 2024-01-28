import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverview({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId);
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  const renderMeal = (renderItem) => {
    const item = renderItem.item;
    const mealItemProp = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity,
    };
    return <MealItem {...mealItemProp} route={route} />;
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
