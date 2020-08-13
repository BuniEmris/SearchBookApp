import React from "react";
import { View, StyleSheet } from "react-native";
import { Txt, Header, Btn } from "../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SearchBook = ({ navigation }) => {
  const goToNext = () => {
    navigation.navigate("BookReview");
  };

  return (
    <View style={styles.container}>
      <Header
        title="My Book List"
        text={{ color: "white", marginTop: 30, marginLeft: 120 }}
      />
      <View style={styles.content}>
        <View style={styles.bookmarkIcon}>
          <MaterialCommunityIcons
            name="bookmark-plus"
            size={64}
            color="#E3E4F2"
          />

          <Txt
            title="You have no books as of yet. Just add your first book review to get started."
            h4
            textStyle={{ textAlign: "center", marginBottom: 90 }}
          />

          <Btn title="Add Books" type="auth" onPress={goToNext} />
        </View>
      </View>
    </View>
  );
};

export { SearchBook };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    marginBottom: 30,
  },
  bookmarkIcon: {
    alignItems: "center",
    marginTop: 50,
  },
});
