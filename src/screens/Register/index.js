import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Txt, Btn, Input, Space } from "../../components";
import { Foundation } from "@expo/vector-icons";
import Firebase from "../../../config/Firebase";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordagain, setPasswordagain] = useState();

  const handleSignUp = () => {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("SearchBook"))
      .catch((error) => alert(error));
  };

  const goToLogin = () => {
    navigation.navigate("BookReview");
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainCircle}>
        <Foundation name="lightbulb" size={64} color="white" />
      </View>
      <View>
        <Txt
          title="Welcome !"
          h1
          bold
          textStyle={{ textAlign: "center", marginVertical: 4 }}
        />
        <Txt
          title="Create your account to get started. After that, you can share books and make friends. "
          h4
          textStyle={{ textAlign: "center" }}
        />
      </View>
      <View>
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

            marginRight: 200,
          }}
        />

        <Input icon value={password} onChangeText={(val) => setPassword(val)} />

        <Txt
          title="type password again"
          h6
          bold
          textStyle={{
            color: "#CAD0DD",
            textTransform: "uppercase",

            marginRight: 200,
          }}
        />
        <Input
          icon
          value={passwordagain}
          onChangeText={(val) => setPasswordagain(val)}
        />
      </View>
      <Btn type="auth" title="Sign up" onPress={handleSignUp} />
      <View style={styles.footer}>
        <Txt title="Already have an account?" h4 />
        <Btn onPress={goToLogin} title="Login" textBtn />
      </View>
    </View>
  );
};

export { Register };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    marginTop: 5,
  },
  mainCircle: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 136,
    height: 136,
    backgroundColor: "#F784EF",
    borderRadius: 120,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "70%",
    marginTop: 40,
  },
});
