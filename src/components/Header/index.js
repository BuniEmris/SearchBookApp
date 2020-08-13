import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "../../helpers/colors";
import { AntDesign } from "@expo/vector-icons";
import { Txt } from "../Txt";

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "24%",
    backgroundColor: colors.secondary,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

const Header = ({ onPress, text, title, icon = false }) => {
  return (
    <View style={styles.main}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {icon ? (
          <TouchableOpacity onPress={onPress} style={{ marginTop: 30 }}>
            <AntDesign name="arrowleft" size={35} color="white" />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <Txt title={title} textStyle={text} h2 />
      </View>
    </View>
  );
};

export { Header };
