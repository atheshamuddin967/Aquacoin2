import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Images } from "../assets/images/Index";
function Input({ placeholderName, secureText, icon, Hideimage }: any) {
  const [showPassword, setShowPassword] = useState(secureText);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View
      style={[
        inputstyle.inputDivBackground,
        isFocused && {
          backgroundColor: "#EFF8FF",
          borderWidth: 2,
          borderColor: "#6EDFE7",
        },
      ]}
    >
      <Image source={icon} style={inputstyle.inputImage} />
      <TextInput
        placeholder={placeholderName}
        secureTextEntry={showPassword}
        style={inputstyle.input}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Image source={Hideimage} style={inputstyle.hideimage} />
      </TouchableOpacity>
    </View>
  );
}

export default Input;
const inputstyle = StyleSheet.create({
  inputDivBackground: {
    backgroundColor: "#FAFAFA",
    width: "100%",
    paddingHorizontal: 10,
    borderRadius: 16,
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: "UrbanistRegular",
    color: "#212121",
    fontWeight: "600",
  },
  inputImage: {
    height: 16,
    width: 16,
    marginHorizontal: 10,
  },
  hideimage: {
    height: 20,
    width: 20,
  },
});
