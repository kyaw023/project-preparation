import React from "react";
import {
  HeroComponent,
  PopularComponent,
  TrailerComponent,
  TrendingComponent,
} from "../../Components";
import { useGetPopularMovieQuery } from "../../store/endpoints/Movie.endpoint";

const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <TrendingComponent />
      <TrailerComponent />
      <PopularComponent />
    </div>
  );
};

export default HomePage;
