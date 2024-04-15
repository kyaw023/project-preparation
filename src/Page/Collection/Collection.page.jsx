import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useGetCollectionQuery } from "../../store/endpoints/Movie.endpoint";
import { MovieDetailCard, CastCardComponent } from "../../Components";
import { Badge } from "../../Components/ui/badge";

const CollectionPage = () => {
  const { id } = useParams();

  const { data, error } = useGetCollectionQuery(id);

  const { state } = useLocation();

  console.log(state?.crew);

  return (
    <div>
      <MovieDetailCard data={data} />
      <div className=" my-10">
        <CastCardComponent title={"Featured Cast"} data={state?.cast} />
      </div>
      <div className=" my-10">
        <CastCardComponent title={"Featured Crew"} data={state?.crew} />
      </div>
      <div>
        <h1 className=" text-xl text-primary my-5">
          {data?.parts?.length} Movie
        </h1>
        {data?.parts?.map((part) => {
          return (
            <div
              key={part?.id}
              className=" bg-slate-100 rounded-xl shadow-md overflow-hidden mb-4 h-48"
            >
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img
                    className=" h-40 w-full object-cover md:h-48 md:w-40"
                    src={"https://image.tmdb.org/t/p/w500" + part?.poster_path}
                  />
                </div>
                <div className="p-4">
                  <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                    {part?.title}
                  </div>
                  <Badge>{part?.release_date}</Badge>

                  <p className="mt-2 text-slate-500">{part?.overview}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
