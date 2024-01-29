import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import MealItem from "./MealItem";

function MealsList({ items }) {
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
    return <MealItem {...mealItemProp} />;
  };
  return (
    <View>
      <FlatList
        keyExtractor={(itemData) => itemData.id}
        renderItem={renderMeal}
        data={items}
      />
    </View>
  );
}

export default MealsList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
