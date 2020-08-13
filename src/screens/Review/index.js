import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Txt, Btn } from "../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Review = ({ navigation }) => {
  const skipInfo = () => {
    navigation.navigate("Register");
  };
  const goToNext = () => {
    navigation.navigate("Share");
  };
  return (
    <View style={styles.container}>
      <View style={styles.orangeCircle}></View>
      <View style={styles.blueCircle}></View>

      <View style={styles.mainCircle}>
        <MaterialCommunityIcons name="star" size={104} color="white" />
      </View>
      <View style={styles.textHeader}>
        <Txt
          title="Review Them"
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

export { Review };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    marginTop: 20,
  },
  orangeCircle: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: "orange",
    alignSelf: "flex-start",
    marginTop: 50,
    marginLeft: 30,
  },
  blueCircle: {
    width: 132,
    height: 132,
    backgroundColor: "blue",
    borderRadius: 80,
    marginRight: -10,
    bottom: 150,
    alignSelf: "flex-end",
  },
  mainCircle: {
    width: 212,
    height: 212,
    backgroundColor: "#FFB487",
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
