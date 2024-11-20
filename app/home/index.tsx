import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MainSlideshow } from "@/presentation/components/movies/MainSlideShow";
import { MovieHorizontalList } from "@/presentation/components/movies/MovieHorizontallist";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, upcomingQuery, topRatedQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex-1 justify-center">
        <ActivityIndicator color="purple" size={50} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bolt px-4 pb-4">MovieApp</Text>
        {/* Carousel imagenes */}
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />
        {/* Populares */}
        <MovieHorizontalList
          title="Populares"
          movies={popularQuery.data ?? []}
          className="mb-5"
        />

        {/* Tiene scroll infinito */}
        {/* Upcoming */}
        <MovieHorizontalList
          title="Mejor calificadas"
          movies={topRatedQuery.data?.pages.flat() ?? []}
          className="mb-5"
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        {/* TopRated */}
        <MovieHorizontalList
          title="Próximamente"
          movies={upcomingQuery.data ?? []}
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
