import React from "react";
import { View, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  smallCardStyle: {
    alignItems: "center",
    width: 71,
    height: 107,
    borderRadius: 8,
    backgroundColor: "black",
    resizeMode: "contain",
  },
  bigCardStyle: {
    alignItems: "center",
    width: 130,
    height: 203,
    borderRadius: 8,
    backgroundColor: "brown",
    resizeMode: "contain",
  },
});

const Card = ({ type, style, image }) => {
  const { container, bigCardStyle, smallCardStyle } = styles;

  const cardStyle = (size) =>
    ({
      small: smallCardStyle,
      big: bigCardStyle,
    }[size]);

  return (
    <View style={container}>
      <View style={[cardStyle(type), style]}>
        <Image image={image} style={cardStyle(type)} />
      </View>
    </View>
  );
};
export { Card };
