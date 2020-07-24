import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../../helpers/colors";
import { AntDesign } from "@expo/vector-icons";
import { Txt } from "../Txt";

const styles = StyleSheet.create({
  roundStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.roundColor,
    height: 48,
    width: 48,
    borderRadius: 50,
    margin: 5,
  },
  authStyle: {
    margin: 5,
    borderRadius: 8,
    backgroundColor: colors.btnColor,
    height: 56,
    width: 315,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonStyle: {
    fontSize: 50,
    color: colors.txtColor,
    textDecorationLine: "underline",
  },
});
const Btn = ({ onPress, title, type, textBtn = false }) => {
  const { authStyle, roundStyle, textButtonStyle, buttonStyle } = styles;

  const myStyle = (size) =>
    ({
      round: roundStyle,
      auth: authStyle,
    }[size]);

  return (
    <TouchableOpacity onPress={onPress} style={[myStyle(type), buttonStyle]}>
      {type === "round" ? (
        <AntDesign name="arrowright" size={26} color="white" />
      ) : (
        <Txt
          title={title}
          textStyle={[
            textBtn
              ? textButtonStyle
              : { color: "white", textTransform: "uppercase" },
          ]}
          h4
        />
      )}
    </TouchableOpacity>
  );
};

export { Btn };
