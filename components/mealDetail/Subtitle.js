import React from "react";
import { View, Text, StyleSheet } from "react-native";

function SubTitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default SubTitle;
const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 8,
    borderColor: "#fff",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
});
