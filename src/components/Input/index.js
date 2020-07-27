import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import colors from "../../helpers/colors";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 8,
    width: 300,
    height: 48,
    backgroundColor: colors.white,
    padding: 10,
    margin: 10,
  },

  hideEye: {
    width: 30,
    height: 30,
    left: 260,
    top: -20,
  },
});

const Input = ({ icon, type, inputValue }) => {
  const { inputContainer, hideEye, inputStyle } = styles;
  const [password, setPassword] = useState("");

  const [showPass, setShowPass] = useState(false);
  const passwordValue = (val) => {
    setPassword(val);
  };
  const myStyle = (size) =>
    ({
      hide: hideEye,
      input: inputContainer,
    }[size]);

  const showOrHide = () => {
    setShowPass(!showPass);
  };

  return (
    <View style={[myStyle(type), inputStyle]}>
      <View style={styles.inputContainer}>
        <TextInput secureTextEntry={showPass} onChangeText={passwordValue} />
        {icon ? (
          <TouchableOpacity onPress={showOrHide} style={styles.hideEye}>
            <Feather
              name={showPass ? "eye" : "eye-off"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export { Input };
