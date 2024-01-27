import React from "react";
import { StyleSheet, View, Text } from "react-native";

function MealsOverview({ route }) {
  const catId = route.params.categoryId;
  console.log("catId======", route);
  return (
    <View>
      <Text>Meals Overview Screen - {catId}</Text>
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
