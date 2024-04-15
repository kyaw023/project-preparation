import { MovieAPI } from "../service/MovieAPI.service";

const SerieEndPoints = MovieAPI.injectEndpoints({
  endpoints: (builder) => ({
    getTrendingSeries: builder.query({
      query: () =>
        "trending/tv/day?api_key=ec801f669051c57582cfefe0e004e430&language=en-US",
    }),
    getSeriesDetail: builder.query({
      query: (id) =>
        `tv/${id}?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getSeriesCast: builder.query({
      query: (id) =>
        `tv/${id}/credits?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getTvSeason: builder.query({
      query: (id) =>
        `tv/${id}/credits?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getSeriesReview: builder.query({
      query: (id) =>
        `tv/${id}/reviews?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=1`,
    }),
    getSeriesVedio: builder.query({
      query: (id) =>
        `tv/${id}/videos?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=1`,
    }),
    getRecommendation: builder.query({
      query: (id) =>
        `tv/${id}/recommendations?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&page=2`,
    }),
    getCollection: builder.query({
      query: (id) =>
        `collection/${id}?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getKeywords: builder.query({
      query: (id) =>
        `tv/${id}/keywords?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getLanguages: builder.query({
      query: () =>
        `configuration/languages?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getAiringTodaySeries: builder.query({
      query: () =>
        `tv/airing_today?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getPopularSeries: builder.query({
      query: () =>
        `tv/popular?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getTopRatedSeries: builder.query({
      query: () =>
        `tv/top_rated?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getOnTVSeries: builder.query({
      query: () =>
        `tv/on_the_air?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
  }),
});

export const {
  useGetTrendingSeriesQuery,
  useGetSeriesDetailQuery,
  useGetSeriesCastQuery,
  useGetSeriesReviewQuery,
  useGetSeriesVedioQuery,
  useGetAiringTodaySeriesQuery,
  useGetPopularSeriesQuery,
  useGetOnTVSeriesQuery,
  useGetTopRatedSeriesQuery,
} = SerieEndPoints;
