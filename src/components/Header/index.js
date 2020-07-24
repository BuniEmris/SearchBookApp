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
  },
});

const Header = ({ onPress, title, icon = false }) => {
  return (
    <View style={styles.main}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {icon ? (
          <TouchableOpacity onPress={onPress}>
            <AntDesign
              name="arrowleft"
              size={35}
              color="white"
              style={{ margin: 10 }}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <Txt
          title={title}
          textStyle={{ color: "white", marginLeft: 80, marginTop: 40 }}
          h2
        />
      </View>
    </View>
  );
};

export { Header };
