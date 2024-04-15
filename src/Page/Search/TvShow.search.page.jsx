import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetTVSearchQuery } from "../../store/endpoints/Search.endpoint";

const TvShowSearchPage = () => {
  const { name } = useParams();
  const { data } = useGetTVSearchQuery(name);

  return (
    <div className=" space-y-5">
      {data?.results?.map((tv) => {
        return (
          <div key={tv?.id}>
            <Link to={`/serie_detail/${tv?.id}`}>
              <div className=" h-[240px] flex space-x-5 bg-secondary-100 border border-secondary-50 rounded-md">
                <img
                  className=" h-full w-40 object-cover rounded-tl-lg rounded-bl-lg"
                  src={"https://image.tmdb.org/t/p/w500" + tv?.poster_path}
                  alt=""
                />
                <div className=" py-5">
                  <h1 className=" text-slate-100">{tv?.title}</h1>
                  <span className=" text-slate-500 text-sm">
                    {tv?.release_date}
                  </span>
                  <p className=" text-secondary-50">{tv?.overview}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TvShowSearchPage;
