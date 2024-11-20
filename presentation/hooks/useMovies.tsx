import { nowPlayinAction } from "@/core/actions/movies/now-playing.action";
import { popularMovieAction } from "@/core/actions/movies/popular.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  // Queries
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => nowPlayinAction(),
    staleTime: 1000 * 60 * 60 * 24, // 24 hs
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: () => popularMovieAction(),
    staleTime: 1000 * 60 * 60 * 24, // 24 hs
  });

  return {
    nowPlayingQuery,
    popularQuery,
  };
};
