import { MovieAPI } from "../service/MovieAPI.service";

const SearchEndpoints = MovieAPI.injectEndpoints({
  endpoints: (builder) => ({
    getMultiSearch: builder.query({
      query: (name) =>
        `search/multi?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&query=${name}`,
    }),
    getMovieSearch: builder.query({
      query: (name) =>
        `search/movie?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&query=${name}`,
    }),
    getTVSearch: builder.query({
      query: (name) =>
        `search/tv?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&query=${name}`,
    }),
    getSearchPeople: builder.query({
      query: (name) =>
        `search/person?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&query=${name}`,
    }),
    getSearchCollection: builder.query({
      query: (name) =>
        `search/collection?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&query=${name}`,
    }),
    getSearchCompany: builder.query({
      query: (name) =>
        `search/company?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&query=${name}`,
    }),
    getSearchKeyword: builder.query({
      query: (name) =>
        `search/keyword?api_key=ec801f669051c57582cfefe0e004e430&language=en-US&query=${name}`,
    }),
  }),
});

export const {
  useGetMultiSearchQuery,
  useGetMovieSearchQuery,
  useGetTVSearchQuery,
  useGetSearchPeopleQuery,
  useGetSearchCollectionQuery,
  useGetSearchCompanyQuery,
  useGetSearchKeywordQuery,
} = SearchEndpoints;
