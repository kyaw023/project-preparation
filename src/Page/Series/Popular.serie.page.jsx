import React from "react";
import { useGetPopularSeriesQuery } from "../../store/endpoints/Series.endpoint";
import {SeriesCardComponent } from "../../Components";

const PopularSeriePage = () => {
  const { data: PopularSeries } = useGetPopularSeriesQuery();
  console.log("PopularSeries", PopularSeries);
  return (
    <div>
      <h1 className="text-slate-400">Popular Series</h1>
      <div className=" grid grid-cols-6 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
        {PopularSeries?.results?.map((serie) => {
          return <SeriesCardComponent key={serie?.id} series={serie} />;
        })}
      </div>
    </div>
  );
};

export default PopularSeriePage;
