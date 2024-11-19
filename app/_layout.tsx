import { View, Text } from "react-native";
import React from "react";
import { Slot, SplashScreen } from "expo-router";

import "../global.css";
import { nowPlayinAction } from "@/core/actions/movies/now-playing.action";

const RootLayout = () => {
  nowPlayinAction()
  return (
    <View>
      <Text className="text-4xl">Root Layout</Text>
    </View>
  );
};

export default RootLayout;
