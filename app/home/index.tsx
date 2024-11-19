import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MainSlideShow } from "@/presentation/components/MainSlideShow";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex-1 justify-center">
        <ActivityIndicator color="purple" size={50} />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bolt px-4 mb-2">HomeScreen</Text>
      <MainSlideShow movies={nowPlayingQuery.data ?? []} />
    </View>
  );
};

export default HomeScreen;
