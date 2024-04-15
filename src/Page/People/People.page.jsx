import React from "react";
import { useGetPopularPeopleQuery } from "../../store/endpoints/People.endpoint";
import { PeopleCardComponent } from "../../Components";

const PeoplePage = () => {
  const { data: popularPeople } = useGetPopularPeopleQuery();
  return (
    <div>
      <div className=" my-6">
        <h1 className=" text-2xl font-semibold text-slate-300">
          Popular People
        </h1>
      </div>
      <div className=" grid grid-cols-5 gap-4">
        {popularPeople?.results?.map((people) => {
          return (
            <div key={people?.id}>
              <PeopleCardComponent people={people} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PeoplePage;
