import React from "react";
import { Text } from "react-native";

const Txt = ({ title, h1, h2, h3, h4, h5, h6, bold, textStyle }) => {
  return (
    <Text
      style={[
        h1 && { fontSize: 32, fontFamily: "Raleway" },
        h2 && { fontSize: 20, fontFamily: "Raleway" },
        h3 && { fontSize: 18, fontFamily: "Raleway" },
        h4 && { fontSize: 16, fontFamily: "Raleway" },
        h5 && { fontSize: 14, fontFamily: "Raleway" },
        h6 && { fontSize: 12, fontFamily: "Raleway" },
        bold && { fontWeight: "bold" },
        textStyle,
      ]}
    >
      {title}
    </Text>
  );
};

export { Txt };
