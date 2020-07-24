import React from "react";
import { Text, View, Button } from "react-native";

const SearchBook = ({ navigation }) => {
  return (
    <View>
      <Button
        title="next Page"
        onPress={() => navigation.navigate("BookList")}
      />
    </View>
  );
};

export { SearchBook };
