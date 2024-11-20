import { nowPlayinAction } from "@/core/actions/movies/now-playing.action";
import { popularMovieAction } from "@/core/actions/movies/popular.action";
import { topRatedMovieAction } from "@/core/actions/movies/top-rated.action";
import { upcomingMovieAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

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

  // Para lo que es infinityScroll
  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "top-rated"],
    queryFn: ({ pageParam }) => {
      console.log({ pageParam });
      return topRatedMovieAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hs
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    upcomingQuery,
    topRatedQuery,
  };
};
