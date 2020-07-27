import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
  },
  smallCardStyle: {
    alignItems: "center",
    width: 71,
    height: 107,
    borderRadius: 8,
    backgroundColor: "black",
    resizeMode: "contain",
    margin: 10,
  },
  bigCardStyle: {
    alignItems: "center",
    width: 130,
    height: 203,
    borderRadius: 8,
    backgroundColor: "brown",
    resizeMode: "contain",
    margin: 10,
  },
});

const Card = ({ onPress, type, style }) => {
  const { container, bigCardStyle, smallCardStyle } = styles;
  const bigImg = require("../../../assets/reactBooktest.png");
  const smallImg = require("../../../assets/reactBooktest.png");

  const cardStyle = (size) =>
    ({
      small: smallCardStyle,
      big: bigCardStyle,
    }[size]);

  const cardSize = (size) =>
    ({
      small: smallImg,
      big: bigImg,
    }[size]);

  return (
    <View style={container}>
      <TouchableOpacity onPress={onPress} style={[cardStyle(type), style]}>
        <Image source={cardSize(type)} style={cardStyle(type)} />
      </TouchableOpacity>
    </View>
  );
};
export { Card };
