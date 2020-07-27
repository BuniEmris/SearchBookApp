import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Txt, Btn, Header, Card, Input, SearchInput } from "../../components";

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
      <Card type="small" />
      <Input />

      <Input icon />
      <SearchInput />

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
