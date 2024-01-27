import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function RenderCategoryItem(itemData) {
    const PressHandler = () => {
      navigation.navigate("MealsOverview");
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
