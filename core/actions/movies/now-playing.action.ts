import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-response";
import { movieApi } from "../api/movie-api";

export const nowPlayinAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>("/now_playing");
    return [];
  } catch (error) {
    console.log(error);
    throw "No se pudo obtener las películas";
  }
};
