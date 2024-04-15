import React from "react";
import { NavbarComponent } from "./Components";
import { Route, Routes } from "react-router-dom";
import {
  AiringTodaySeriesPage,
  CastPage,
  CollectionPage,
  CompaniesSearchPage,
  HomePage,
  KeywordSearchPage,
  MovieDetailPage,
  MovieSearchPage,
  MoviesPage,
  NetworkSearchPage,
  NowplayingMoviePage,
  OnTVSeriesPage,
  PeopleDetailPage,
  PeoplePage,
  PeopleSearchPage,
  PopularMoviePage,
  SearchPage,
  SeriesDetailPage,
  SeriesPage,
  TopRatedSeriesPage,
  TopratedMoviePage,
  TvShowSearchPage,
  UpcomingMoviePage,
} from "./Page";
import PopularSeriePage from "./Page/Series/Popular.serie.page";
import CollectionSearchPage from "./Page/Search/Collection.search.page";
import ReviewPage from "./Page/Review/Review.page";

const App = () => {
  return (
    <div className="custom-container py-3">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route index element={<PopularMoviePage />} />
          <Route path="upcoming" element={<UpcomingMoviePage />} />
          <Route path="toprated" element={<TopratedMoviePage />} />
          <Route path="nowplaying" element={<NowplayingMoviePage />} />
        </Route>
        <Route path="/series" element={<SeriesPage />}>
          <Route index element={<PopularSeriePage />} />
          <Route path="airing" element={<AiringTodaySeriesPage />} />
          <Route path="toprated" element={<TopRatedSeriesPage />} />
          <Route path="onTV" element={<OnTVSeriesPage />} />
        </Route>
        <Route path="/search" element={<SearchPage />}>
          <Route path="tv/:name" element={<TvShowSearchPage />} />
          <Route path="movie/:name" element={<MovieSearchPage />} />
          <Route path="person/:name" element={<PeopleSearchPage />} />
          <Route path="collection/:name" element={<CollectionSearchPage />} />
          <Route path="companies/:name" element={<CompaniesSearchPage />} />
          <Route path="networks/:name" element={<NetworkSearchPage />} />
          <Route path="keywords/:name" element={<KeywordSearchPage />} />
        </Route>
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/people_detail/:id" element={<PeopleDetailPage />} />
        <Route path="/collection/:id" element={<CollectionPage />} />
        <Route path="/movie_detail/:id" element={<MovieDetailPage />} />
        <Route path="/movie_detail/:id/reviews" element={<ReviewPage />} />
        <Route path="/serie_detail/:id" element={<SeriesDetailPage />} />
        <Route path="/cast" element={<CastPage />} />
      </Routes>
    </div>
  );
};

export default App;
