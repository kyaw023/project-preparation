import { MovieAPI } from "../service/MovieAPI.service";

const MovieEndPoints = MovieAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPopularMovie: builder.query({
      query: () =>
        "movie/popular?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=1",
    }),
    getMovieDetail: builder.query({
      query: (id) =>
        `movie/${id}?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getTopBilledCast: builder.query({
      query: (id) =>
        `movie/${id}/credits?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getMovieReviews: builder.query({
      query: (id) =>
        `movie/${id}/reviews?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=1`,
    }),
    getMovieVedio: builder.query({
      query: (id) =>
        `movie/${id}/videos?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=1`,
    }),
    getRecommendation: builder.query({
      query: (id) =>
        `movie/${id}/recommendations?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=2`,
    }),
    getCollection: builder.query({
      query: (id) =>
        `collection/${id}?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getKeywords: builder.query({
      query: (id) =>
        `movie/${id}/keywords?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getLanguages: builder.query({
      query: () =>
        `configuration/languages?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getTrending: builder.query({
      query: (name) =>
        `trending/movie/${name}?api_key=ec801f669051c57582cfefe0e004e430`,
    }),
    getGenres: builder.query({
      query: (name) =>
        `genre/${name}/list?api_key=ec801f669051c57582cfefe0e004e430`,
    }),
    getNowPlayingMovie: builder.query({
      query: () =>
        `movie/now_playing?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=1`,
    }),
    getTopRatedMovie: builder.query({
      query: () =>
        `movie/top_rated?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=1`,
    }),
    getUpcomingMovie: builder.query({
      query: () =>
        `movie/upcoming?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=1`,
    }),
  }),
});

export const {
  useGetPopularMovieQuery,
  useGetMovieDetailQuery,
  useGetGenresQuery,
  useGetTopBilledCastQuery,
  useGetMovieReviewsQuery,
  useGetMovieVedioQuery,
  useGetCollectionQuery,
  useGetRecommendationQuery,
  useGetKeywordsQuery,
  useGetLanguagesQuery,
  useGetTrendingQuery,
  useGetNowPlayingMovieQuery,
  useGetTopRatedMovieQuery,
  useGetUpcomingMovieQuery,
} = MovieEndPoints;
