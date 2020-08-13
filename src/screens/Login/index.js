import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Txt, Btn, Input } from "../../components";
import Firebase from "../../../config/Firebase";

const Login = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("SearchBook"))
      .catch((error) => alert(error));
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Txt title="Sign In" h1 bold />

        <View style={styles.content}>
          <View style={{ marginBottom: 60 }}>
            <Txt
              title="email"
              h6
              bold
              textStyle={{
                color: "#CAD0DD",
                textTransform: "uppercase",
                margin: 5,
                marginRight: 200,
              }}
            />
            <Input value={email} onChangeText={(val) => setEmail(val)} />
            <Txt
              title="password"
              h6
              bold
              textStyle={{
                color: "#CAD0DD",
                textTransform: "uppercase",
                margin: 5,
                marginRight: 200,
              }}
            />
            <Input
              icon
              value={password}
              onChangeText={(val) => setPassword(val)}
            />
          </View>
          <Btn type="auth" title="Sign up" onPress={handleLogin} />
        </View>
        <View style={styles.footer}>
          <Txt title="New here? " h4 />
          <Btn onPress={goToRegister} title="Create an account" textBtn />
        </View>
      </View>
    </View>
  );
};

export { Login };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 15,
  },
  header: {
    alignSelf: "flex-start",
    marginVertical: 120,
    marginLeft: 20,
  },
  content: {
    marginTop: 60,
  },
  footer: {
    marginTop: 60,
    marginLeft: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "70%",
  },
});
