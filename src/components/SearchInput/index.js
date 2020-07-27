import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import colors from "../../helpers/colors";
import { AntDesign } from "@expo/vector-icons";

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Search Book" />
      </View>
      <View style={styles.searchIcon}>
        <AntDesign name="search1" size={20} color="black" />
      </View>
    </View>
  );
};

export { SearchInput };
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    bottom: 40,
    left: 10,
    width: 25,
    height: 25,
    alignSelf: "flex-start",
  },
  inputContainer: {
    borderRadius: 8,
    width: 300,
    height: 40,
    backgroundColor: "white",
    padding: 10,
    paddingLeft: 30,
    margin: 10,
  },
});
