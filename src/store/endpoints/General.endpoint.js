import { MovieAPI } from "../service/MovieAPI.service";
const SearchEndpoints = MovieAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAccountDetail: builder.query({
      query: (sessionID) =>
        `account?session_id=${sessionID}&api_key=ec801f669051c57582cfefe0e004e430`,
      providesTags: ["themoviedb"],
    }),
  }),
});

export const { useGetAccountDetailQuery } = SearchEndpoints;
