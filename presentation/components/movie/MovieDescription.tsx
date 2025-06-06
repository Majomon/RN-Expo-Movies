import { Formatter } from "@/config/helpers/formatter";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { Text, View } from "react-native";

interface Props {
  movie: CompleteMovie;
}

export const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <Text>{movie.rating}</Text>
        <Text className=""> - {movie.genres.join(", ")}</Text>
      </View>
      <Text className="font-bold mt-5">Historia</Text>
      <Text className="font-normal mt-2">{movie.description}</Text>
      <Text className="font-bold mt-2 text-2xl">{Formatter.currency(movie.budget)}</Text>
    </View>
  );
};
