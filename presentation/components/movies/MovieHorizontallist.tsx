import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { MoviePoster } from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movie[];
}

export const MovieHorizontalList = ({ title, movies }: Props) => {
  return (
    <View>
      {title && <Text className="text-2xl font-bold px-4 mb-2 mt-4">{title}</Text>}
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
      />
    </View>
  );
};
