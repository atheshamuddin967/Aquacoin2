import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LoginStyle } from "../styles/LoginStyle";
import Input from "../component/Input";
import { Images } from "../assets/images/Index";
import Button from "../component/Button";
function Login() {
  return (
    <View style={LoginStyle.LoginContainer}>
      <Image source={Images.logo} style={LoginStyle.loginImage} />
      <Text style={LoginStyle.LoginHeading}>Login to Your Account</Text>
      <Input
        placeholderName={"Enter Your Email"}
        secureText={false}
        icon={Images.email}
      />
      <Input
        placeholderName={"Enter Your password"}
        secureText={true}
        icon={Images.lock}
        Hideimage={Images.eye}
      />
      <Button title={"Sign in"} />
      <View style={LoginStyle.secondcontainer}>
        <View style={LoginStyle.thirdcontainer}>
          <TouchableOpacity>
            <Text style={LoginStyle.forget}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <View style={LoginStyle.newaccount}>
          <Text style={LoginStyle.newAccText}>Dont have an account?</Text>
          <TouchableOpacity>
            <Text style={LoginStyle.swithAcc}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;
