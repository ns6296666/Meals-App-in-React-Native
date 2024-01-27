import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function RenderCategoryItem(itemData) {
    const PressHandler = () => {
      navigation.navigate("MealsOverview", {
        headerBackTitle: "Back",
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={PressHandler}
      />
    );
  }
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={RenderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
