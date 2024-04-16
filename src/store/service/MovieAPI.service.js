import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MovieAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  tagTypes: ["themoviedb"],
  endpoints: (builder) => ({}),
});
