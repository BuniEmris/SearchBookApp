import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Txt, Header, Btn, Card, Space } from "../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BookDetails = ({ route, navigation }) => {
  const {
    item: { title, author, comment_text },
  } = route.params;

  const goToNext = () => {
    navigation.navigate("Review");
  };
  const goToRead = () => {
    navigation.navigate("SearchError");
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
        <Card type="big" style={{ bottom: 40 }} />
        <View style={styles.bookName}>
          <Txt title={title} h3 bold />
          <View style={styles.author}>
            <Txt h5 title={author} />
            <View style={styles.rating}>
              <MaterialCommunityIcons name="star" size={16} color="gold" />
            </View>
          </View>
        </View>
      </View>
      <View style={{ width: 315, height: 110, marginLeft: 30 }}>
        <Txt title={comment_text} h5 textStyle={{ textAlign: "center" }} />
        <Space />
        <Btn title="Full Synopsis" textBtn onPress={goToRead} />
        <View
          style={{
            marginVertical: 30,
            border: 1,
            width: 375,
            height: 1,
            backgroundColor: "black",
          }}
        ></View>
      </View>
    </View>
  );
};

export { BookDetails };

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
  author: {
    height: 18,

    marginTop: 10,
  },
  bookName: {
    width: 182,
    height: 46,
    marginTop: 40,
  },
  rating: {
    flexDirection: "row",

    height: 16,
    marginTop: 30,
  },
});
