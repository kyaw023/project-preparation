import React from "react";
import {
  useGetPopularMovieQuery,
  useGetTrendingQuery,
} from "../../store/endpoints/Movie.endpoint";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TrendingCardComponent from "./TrendingCard.component";
import LoadingComponent from "../Loading/Loading.component";

const TrendingComponent = () => {
  const { data: trendingWeek, isLoading: weekIsLoading } =
    useGetTrendingQuery("week");
  const { data: trendingDay, isLoading: dayIsLoading } =
    useGetTrendingQuery("day");

  return (
    <div className="">
      {dayIsLoading && <LoadingComponent />}
      {weekIsLoading && <LoadingComponent />}
      <h1 className=" text-2xl text-slate-200 mb-5 mt-10">Trending</h1>
      <Tabs defaultValue="today">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="thisweek">This Week</TabsTrigger>
        </TabsList>
        <TabsContent
          value="today"
          className="animate__animated animate__fadeIn"
        >
          <TrendingCardComponent trending={trendingDay} />
        </TabsContent>
        <TabsContent
          value="thisweek"
          className="animate__animated animate__fadeIn"
        >
          <TrendingCardComponent trending={trendingWeek} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TrendingComponent;
