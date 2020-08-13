import React from "react";
import { View, StyleSheet } from "react-native";
import { Txt, Btn } from "../../components";
import { FontAwesome } from "@expo/vector-icons";

const Share = ({ navigation }) => {
  const skipInfo = () => {
    navigation.navigate("Register");
  };
  const goToNext = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <View style={styles.orangeCircle}></View>
      <View style={styles.blueCircle}></View>

      <View style={styles.mainCircle}>
        <FontAwesome name="share-alt" size={84} color="white" />
      </View>
      <View style={styles.textHeader}>
        <Txt
          title="Share, Make Friends"
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

export { Share };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    marginTop: 20,
  },
  orangeCircle: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: "#32CFF9",
    alignSelf: "flex-start",
    marginLeft: 20,
    bottom: 40,
  },
  blueCircle: {
    width: 32,
    height: 32,
    backgroundColor: "#4BE34E",
    borderRadius: 50,
    marginRight: 20,
    marginVertical: 30,
    alignSelf: "flex-end",
  },
  mainCircle: {
    width: 212,
    height: 212,
    backgroundColor: "#F784EF",
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
