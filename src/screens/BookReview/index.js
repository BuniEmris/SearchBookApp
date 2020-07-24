import React from "react";
import { View, Button } from "react-native";

const BookReview = ({ navigation }) => {
  return (
    <View>
      <Button
        title="next Page"
        onPress={() => navigation.navigate("SearchError")}
      />
    </View>
  );
};

export { BookReview };
