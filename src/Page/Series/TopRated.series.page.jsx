import React from "react";
import { useGetTopRatedSeriesQuery } from "../../store/endpoints/Series.endpoint";
import { SeriesCardComponent } from "../../Components";

const TopRatedSeriesPage = () => {
  const { data: topRatedSereis } = useGetTopRatedSeriesQuery();
  return (
    <div>
      <h1 className="text-slate-400">Top Rated Series</h1>
      <div className=" grid grid-cols-6 gap-x-2 gap-y-10 mt-5 animate__animated animate__fadeIn">
        {topRatedSereis?.results?.map((serie) => {
          return <SeriesCardComponent key={serie?.id} series={serie} />;
        })}
      </div>
    </div>
  );
};

export default TopRatedSeriesPage;
