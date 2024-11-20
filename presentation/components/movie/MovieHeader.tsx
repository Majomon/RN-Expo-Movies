import React from "react";
import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

export const MovieHeader = ({ poster, originalTitle, title }: Props) => {
  const { height: screenHeight } = useWindowDimensions();

  return (
    <>
      {/* Gradiente */}
      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "transparent"]}
        style={{
          width: "100%",
          height: screenHeight * 0.4,
          position: "absolute",
          zIndex: 1,
        }}
        start={[0, 0]}
      />

      {/* Botón para volver */}
      <View
        style={{
          position: "absolute",
          zIndex: 99,
          elevation: 9,
          top: 40,
          left: 10,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            name="arrow-back"
            size={30}
            className="shadow"
            color="white"
          />
        </Pressable>
      </View>
      <View
        style={{ height: screenHeight * 0.7 }}
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image
            source={{ uri: poster }}
            resizeMode="cover"
            className="flex-1"
          />
        </View>
        <View className="px-5  mt-5">
          <Text className="font-normal">{originalTitle}</Text>
          <Text className="font-semibold text-2xl">{title}</Text>
        </View>
      </View>
    </>
  );
};
