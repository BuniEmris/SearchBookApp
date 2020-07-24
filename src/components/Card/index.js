import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../../helpers/colors";

const styles = StyleSheet.create({
  smallCardStyle: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: colors.black,
    resizeMode: "contain",
  },
  bigCardStyle: {
    width: 200,
    height: 200,
    borderRadius: 8,
    backgroundColor: "blue",
    resizeMode: "contain",
  },
});

const Card = ({ onPress, image }) => {
  const { smallCardStyle, bigCardStyle } = styles;

  const cardImages = (size) =>
    ({
      small: smallCardStyle,
      big: bigCardStyle,
    }[size]);

  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View>
            {image ? (
              <TouchableOpacity onPress={onPress}>
                <Image source={uri("")} style={styles.bigCardStyle} />
              </TouchableOpacity>
            ) : (
              <Image source={uri("")} style={styles.smallCardStyle} />
            )}
          </View>
        )}
      />
    </View>
  );
};

export { Card };
