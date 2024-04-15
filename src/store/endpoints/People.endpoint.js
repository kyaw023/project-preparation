import { MovieAPI } from "../service/MovieAPI.service";

const PeopleEndPoints = MovieAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPopularPeople: builder.query({
      query: () =>
        "person/popular?api_key=ec801f669051c57582cfefe0e004e430&language=en-US",
    }),
    getPeopleDetail: builder.query({
      query: (id) =>
        `person/${id}?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getKnowFor: builder.query({
      query: (id) =>
        `person/${id}/movie_credits?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
    getAction: builder.query({
      query: (id) =>
        `person/${id}/combined_credits?api_key=ec801f669051c57582cfefe0e004e430&language=en-US`,
    }),
  }),
});

export const {
  useGetPopularPeopleQuery,
  useGetPeopleDetailQuery,
  useGetKnowForQuery,
  useGetActionQuery,
} = PeopleEndPoints;
