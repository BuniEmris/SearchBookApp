import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Txt, Header, Btn, Card, Space } from "../../components";
import { FontAwesome5 } from "@expo/vector-icons";

const SearchError = ({ navigation }) => {
  const goToNext = () => {
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <Header
        icon
        onPress={goToNext}
        title="Add Book Review"
        text={{ color: "white", marginTop: 30, marginLeft: 80 }}
      />
      <View style={styles.content}>
        <View style={styles.bookmarkIcon}>
          <FontAwesome5 name="sad-tear" size={64} color="#E3E4F2" />

          <Txt
            title="You have no friends as of yet. Just add your first friends to get started."
            h4
            textStyle={{ textAlign: "center", marginBottom: 90 }}
          />
        </View>
      </View>
    </View>
  );
};

export { SearchError };
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: "flex-start",
    marginBottom: 60,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bookmarkIcon: {
    alignItems: "center",
    marginTop: 50,
  },
});
