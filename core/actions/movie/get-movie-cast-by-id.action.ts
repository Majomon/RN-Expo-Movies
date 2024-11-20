import { MovieDBCreditsResponse } from "@/infrastructure/interfaces/moviedb-credits.response";
import { movieApi } from "../api/movie-api";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastByIdACtion = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<MovieDBCreditsResponse>(
      `/${movieId}/credits`
    );

    return data.cast.map(CastMapper.fromTheMovieDBToEntity);
  } catch (error) {
    console.log(error);
    throw "No se pudo obtener los actores";
  }
};
