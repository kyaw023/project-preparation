import React from "react";
import { useGetPopularMovieQuery } from "../../store/endpoints/Movie.endpoint";
import { LoadingComponent, MovieCardComponent } from "../../Components";
import "animate.css";
const PopularMoviePage = () => {
  const { data: popularMovies ,isLoading } = useGetPopularMovieQuery();

  return (
    <div className=" ">
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div>
          <h1 className="text-slate-400">Popular Movie</h1>
          <div className=" grid grid-cols-6 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
            {popularMovies?.results?.map((movie) => {
              return <MovieCardComponent key={movie?.id} movie={movie} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularMoviePage;
