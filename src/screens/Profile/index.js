import React from "react";
import { View, StyleSheet } from "react-native";
import { Txt, Btn, Header } from "../../components";

const Profile = ({ navigation }) => {
  const goToNext = () => {
    navigation.navigate("Share");
  };

  const checkTest = () => {
    alert("Clicked");
  };
  return (
    <View style={styles.container}>
      <Header title="Read Books" icon />

      <Txt title="Read Books" h1 bold />
      <Txt title="Read Books" h2 />
      <Txt title="Read Books" h3 />
      <Txt title="Read Books" h4 />

      <Btn type="round" onPress={checkTest} title={"Round"} />

      <Btn type="auth" onPress={checkTest} title={"Auth"} />

      <Btn onPress={checkTest} title="Skip Info" textBtn />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export { Profile };
