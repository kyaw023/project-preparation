import { MovieAPI } from "../service/MovieAPI.service";

const SearchEndpoints = MovieAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAccountDetail: builder.query({
      query: () => ({
        method: "GET",
        url: "account/18543278?api_key=ec801f669051c57582cfefe0e004e430",
      }),
    }),
  }),
});

export const { useGetAccountDetailQuery } = SearchEndpoints;
