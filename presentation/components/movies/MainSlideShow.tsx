import { useRef } from "react";
import { useWindowDimensions, View } from "react-native";

import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { MoviePoster } from "./MoviePoster";

interface Props {
  movies: Movie[];
}

export const MainSlideshow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;

  return (
    <View className="w-full h-[250px]">
      <Carousel
        ref={ref}
        data={movies}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        loop
        autoPlay
        //! Este modo no funciona en esta version aun
        // mode="parallax"
        defaultIndex={1}
        pagingEnabled
        snapEnabled
        scrollAnimationDuration={3000}
        renderItem={({ item, index }) => (
          <MoviePoster key={index} id={item.id} poster={item.poster} />
        )}
      />
    </View>
  );
};
