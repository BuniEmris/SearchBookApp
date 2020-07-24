import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Txt } from "../../components";

const Review = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Txt title="Review Them" />
      <Button title="next Page" onPress={() => navigation.navigate("Share")} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export { Review };
