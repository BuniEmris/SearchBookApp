import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import colors from "../../helpers/colors";

const Input = ({ placeholder }) => {
  return (
    <View style={styles.inputStyle}>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderRadius: 8,
    width: "70%",
    height: 48,
    backgroundColor: colors.white,
  },
});

export { Input };
