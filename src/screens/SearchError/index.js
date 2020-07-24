import React from "react";
import { Text, View, Button } from "react-native";

const SearchError = ({ navigation }) => {
  return (
    <View>
      <Button
        title="next Page"
        onPress={() => navigation.navigate("SearchBook")}
      />
    </View>
  );
};

export { SearchError };
