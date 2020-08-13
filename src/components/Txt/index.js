import React from "react";
import { Text } from "react-native";
import colors from "../../helpers/colors";

const Txt = ({ title, h1, h2, h3, h4, h5, h6, bold, textStyle }) => {
  return (
    <Text
      style={[
        h1 && { fontSize: 32, fontFamily: "Raleway", color: colors.txtColor },
        h2 && { fontSize: 20, fontFamily: "Raleway", color: colors.txtColor },
        h3 && { fontSize: 18, fontFamily: "Raleway", color: colors.txtColor },
        h4 && { fontSize: 16, fontFamily: "Raleway", color: colors.txtColor },
        h5 && { fontSize: 14, fontFamily: "Raleway", color: colors.txtColor },
        h6 && { fontSize: 12, fontFamily: "Raleway", color: colors.txtColor },
        bold && { fontWeight: "bold" },
        textStyle,
      ]}
    >
      {title}
    </Text>
  );
};

export { Txt };
