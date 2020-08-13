import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import colors from "../../helpers/colors";
import { AntDesign } from "@expo/vector-icons";

const SearchInput = () => {
  return (
    <View style={styles.inputContainer}>
      <View style={{ marginRight: 10 }}>
        <AntDesign name="search1" size={20} color="black" />
      </View>
      <View>
        <TextInput placeholder="Search Book" />
      </View>
    </View>
  );
};

export { SearchInput };
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: 300,
    height: 40,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    shadowOpacity: 4,
    shadowRadius: 4,
  },
});
