import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import fonts from Expo
import * as Font from "expo-font";

import {
  Profile,
  Review,
  Share,
  Register,
  Login,
  SearchBook,
  BookDetails,
  BookReview,
  SearchError,
} from "./src/screens";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  let customFonts = {
    Raleway: require("./assets/Raleway-Regular.ttf"),
  };

  useEffect(() => {
    Font.loadAsync(customFonts).then(() => setFontsLoaded(true));
  }, [customFonts, setFontsLoaded]);

  return (
    <NavigationContainer>
      {fontsLoaded ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Profile"
        >
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Review" component={Review} />
          <Stack.Screen name="Share" component={Share} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SearchBook" component={SearchBook} />
          <Stack.Screen name="BookDetails" component={BookDetails} />
          <Stack.Screen name="BookReview" component={BookReview} />
          <Stack.Screen name="SearchError" component={SearchError} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}
