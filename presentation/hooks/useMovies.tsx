import { nowPlayinAction } from "@/core/actions/movies/now-playing.action";
import { popularMovieAction } from "@/core/actions/movies/popular.action";
import { topRatedMovieAction } from "@/core/actions/movies/top-rated.action";
import { upcomingMovieAction } from "@/core/actions/movies/upcoming.action";
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

  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: () => upcomingMovieAction(),
    staleTime: 1000 * 60 * 60 * 24, // 24 hs
  });

  const topRatedQuery = useQuery({
    queryKey: ["movies", "top-rated"],
    queryFn: () => topRatedMovieAction(),
    staleTime: 1000 * 60 * 60 * 24, // 24 hs
  });

  return {
    nowPlayingQuery,
    popularQuery,
    upcomingQuery,
    topRatedQuery,
  };
};
