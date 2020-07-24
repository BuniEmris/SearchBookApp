import React from "react";
import { View, Button } from "react-native";

const BookList = ({ navigation }) => {
  return (
    <View>
      <Button
        title="next Page"
        onPress={() => navigation.navigate("BookReview")}
      />
    </View>
  );
};

export { BookList };
