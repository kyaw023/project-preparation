import React from "react";
import { useParams } from "react-router-dom";
import {
  MediaComponent,
  MovieDetailCard,
  ReviewsComponent,
  TopBilledCastComponent,
} from "../../Components";
import {
  useGetSeriesCastQuery,
  useGetSeriesDetailQuery,
  useGetSeriesReviewQuery,
  useGetSeriesVedioQuery,
} from "../../store/endpoints/Series.endpoint";
import SeasonsComponent from "../../Components/SerieComponents/Seasons.component";

const SeriesDetailPage = () => {
  const { id } = useParams();
  const { data: seriesDetail } = useGetSeriesDetailQuery(id);
  const { data: seriesCast } = useGetSeriesCastQuery(id);
  const { data: seriesReview } = useGetSeriesReviewQuery(id);
  const { data: seriesVedios } = useGetSeriesVedioQuery(id);

  console.log("seriesReview", seriesReview);
  return (
    <div>
      {/* DetailCard */}
      <MovieDetailCard data={seriesDetail} />

      {/* series card */}
      <div className=" ">
        <h1 className=" text-2xl font-semibold text-slate-200 my-10">
          Series Cast
        </h1>
        <TopBilledCastComponent data={seriesCast} />
      </div>

      {/* season */}

      <div className=" mt-10">
        <SeasonsComponent seasons={seriesDetail?.seasons} />
      </div>

      {/* review */}
      <ReviewsComponent data={seriesReview} />

      {/* social */}
      <MediaComponent vedios={seriesVedios} />
    </div>
  );
};

export default SeriesDetailPage;
