import React from "react";
import { useParams } from "react-router-dom";
import { useGetKeywordsQuery } from "../../store/endpoints/Movie.endpoint";

const KeywordsSearchPage = () => {
  const { name } = useParams();

  const { data } = useGetKeywordsQuery(name);

  console.log(data);
  return <div>KeywordsSearchPage</div>;
};

export default KeywordsSearchPage;
