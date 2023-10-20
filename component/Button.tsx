import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
function Button({ title }: any) {
  return (
    <TouchableOpacity style={Buttonstyles.button}>
      <Text style={Buttonstyles.ButtonTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
const Buttonstyles = StyleSheet.create({
  button: {
    backgroundColor: "#6EDFE7",
    marginVertical: 10,
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  ButtonTitle: {
    color: "white",
    fontSize: 16,
    fontFamily: "UrbanistRegular",
    fontWeight: "700",
  },
});
