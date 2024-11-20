import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { movieApi } from "../api/movie-api";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedMovieAction = async ({
  page = 1,
  limit = 10,
}: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/top_rated", {
      params: {
        page: page,
      },
    });
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
