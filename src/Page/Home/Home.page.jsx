import React from "react";
import {
  HeroComponent,
  NavbarComponent,
  PopularComponent,
  TrailerComponent,
  TrendingComponent,
} from "../../Components";
import { useGetPopularMovieQuery } from "../../store/endpoints/Movie.endpoint";
import { Navbar } from "@material-tailwind/react";

const HomePage = () => {
  return (
    <div>
      <NavbarComponent />
      <HeroComponent />
      <TrendingComponent />
      <TrailerComponent />
      <PopularComponent />
    </div>
  );
};

export default HomePage;
