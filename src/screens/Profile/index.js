import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Txt, Btn, Header, Card, Input, SearchInput } from "../../components";
import { Feather } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  const goToNext = () => {
    navigation.navigate("Review");
  };

  const skipInfo = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <View style={styles.orangeCircle}></View>
      <View style={styles.blueCircle}></View>

      <View style={styles.mainCircle}>
        <Feather name="book-open" size={104} color="white" />
      </View>
      <View style={styles.textHeader}>
        <Txt
          title="Read Books"
          h1
          bold
          textStyle={{ textAlign: "center", marginVertical: 4 }}
        />
        <Txt
          title="Create your account to get started. After that, you can share books and make friends. "
          h4
          textStyle={{ textAlign: "center" }}
        />
      </View>
      <View style={styles.nextPageContainer}>
        <View style={styles.swipeView}>
          <View
            style={{
              width: 36,
              marginHorizontal: 5,
              borderRadius: 10,
              height: 12,
              backgroundColor: "#72EB56",
            }}
          />
          <View
            style={{
              marginHorizontal: 5,
              borderRadius: 10,
              width: 12,
              height: 12,
              backgroundColor: "#72EB56",
            }}
          />
          <View
            style={{
              marginHorizontal: 5,
              borderRadius: 10,
              width: 12,
              height: 12,
              backgroundColor: "#72EB56",
            }}
          />
        </View>
        <View style={{ marginRight: 20 }}>
          <Btn type="round" onPress={goToNext} />
        </View>
      </View>
      <Btn onPress={skipInfo} title="Skip Info" textBtn />
    </View>
  );
};

export { Profile };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    marginTop: 20,
  },
  orangeCircle: {
    width: 74,
    height: 74,
    borderRadius: 50,
    backgroundColor: "orange",
    alignSelf: "flex-start",
  },
  blueCircle: {
    width: 72,
    height: 72,
    backgroundColor: "blue",
    borderRadius: 50,
    marginRight: 20,
    marginVertical: 30,
    alignSelf: "flex-end",
  },
  mainCircle: {
    width: 212,
    height: 212,
    backgroundColor: "green",
    borderRadius: 120,
    bottom: 90,

    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    bottom: 80,
  },
  nextPageContainer: {
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-between",
  },
  swipeView: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
  },
});
