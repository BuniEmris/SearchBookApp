import React from "react";
import { Text, View, Button } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View>
      <Button
        title="next Page"
        onPress={() => navigation.navigate("SearchBook")}
      />
    </View>
  );
};

export { Login };
