import React, { Fragment } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../../helpers/colors";
import { AntDesign } from "@expo/vector-icons";
import { Txt } from "../Txt/index";

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
    width: 320,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonStyle: {
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
          h3
          title={title}
          textStyle={[
            textBtn
              ? textButtonStyle
              : { color: "white", textTransform: "uppercase" },
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

export { Btn };
