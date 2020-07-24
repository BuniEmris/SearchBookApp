import React from "react";
import { Text, View, Button } from "react-native";

const Register = ({ navigation }) => {
  return (
    <View>
      <Button title="next Page" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export { Register };
