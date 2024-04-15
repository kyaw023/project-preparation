import React from "react";

import HoverCardComponent from "./HoverCard.component";
import { Badge } from "./ui/badge";

import { Bookmark, Heart, List, Youtube } from "lucide-react";
import ProgressComponent from "./Progress/Progress.component";

const CardComponent = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div
        className={`mt-20 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] border border-secondary-100 rounded-3xl px-10 py-10 h-[540px]`}
      >
        <div className=" flex items-center justify-between">
          <div>
            <h1 className=" text-3xl font-semibold text-slate-50">
              {data?.original_title || data?.name}
            </h1>
            <div className=" flex items-center gap-2 mt-2">
              {data?.genres?.map((genre) => {
                return (
                  <div key={genre?.id}>
                    <Badge variant="outline" className={" text-secondary-50"}>
                      {genre?.name}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" ">
            <p className=" text-primary">
              {data?.vote_average} /{" "}
              <span className=" text-secondary-50">{data?.vote_count}</span>
            </p>
          </div>
        </div>
        <div className=" mt-6 flex  gap-6">
          <img
            className=" h-[280px] w-[200px] object-cover"
            src={"https://image.tmdb.org/t/p/w500" + data?.poster_path}
            alt=""
          />
          <div>
            {/* movie overview */}
            <h1 className=" text-xl font-semibold text-slate-100">
              About The Movie
            </h1>
            <p className=" text-secondary-50 max-w-xl text-sm">
              {data?.overview}
            </p>

            {/* add icons list & heart & bookmark*/}
            <div className=" mt-6 flex space-x-3">
              <HoverCardComponent
                icon={<List size={"16px"} />}
                description={"Add to list"}
              />
              <HoverCardComponent
                icon={<Heart size={"16px"} />}
                description={"Marks as favourite"}
              />
              <HoverCardComponent
                icon={<Bookmark size={"16px"} />}
                description={"Add to your watchlist"}
              />
            </div>

            {/* use score */}
            <ProgressComponent movie={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
