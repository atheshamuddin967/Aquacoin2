import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import React, { useMemo, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import Login from "./screen/Login";
export default function App() {
  let [fontsLoaded] = useFonts({
    UrbanistBold: require("./fonts/Urbanist-Bold.ttf"),
    UrbanistMedium: require("./fonts/Urbanist-Medium.ttf"),
    UrbanistRegular: require("./fonts/Urbanist-Regular.ttf"),
    UrbanistSemiBold: require("./fonts/Urbanist-SemiBold.ttf"),
  });
  useMemo(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      console.log("hide");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log("not hide");
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
