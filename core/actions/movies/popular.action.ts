import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { movieApi } from "../api/movie-api";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const popularMovieAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/popular");
    // console.log(JSON.stringify(data, null, 2));

    // Es lo mismo que el que esta abajo . Si tengo un argumento que paso a otra funcion puedo obviarlo
    // const movies = data.results.map((movie)=>MovieMapper.fromTheMovieDBToMovie(movie));
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "No se pudo obtener las películas";
  }
};
