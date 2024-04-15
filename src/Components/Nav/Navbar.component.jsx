import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useGetMultiSearchQuery } from "../../store/endpoints/Search.endpoint";
import { Plus } from "lucide-react";
import { useGetAccountDetailQuery } from "../../store/endpoints/General.endpoint";

const NavbarComponent = () => {
  const [searchValues, setSearchValues] = useState("");
  const navigator = useNavigate();
  const onChangeHandler = (e) => {
    setSearchValues(e.target.value);
  };

  const { data } = useGetMultiSearchQuery(searchValues);

  const { data: acc } = useGetAccountDetailQuery();
  console.log(acc);
  const queryName = data?.results[0]?.media_type;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigator(`/search/${queryName}/${searchValues}`, {
      state: { data, searchValues },
    });
    setSearchValues("");
  };

  return (
    <div className=" flex items-center justify-between select-none">
      <Link to={"/"}>
        <h1 className=" text-2xl font-semibold text-slate-50">
          <span className=" text-primary">Prime</span>Flicks
        </h1>
      </Link>
      <ul className=" flex item-center gap-8 text-secondary-50 ">
        <NavLink to="/">
          <li>Main</li>
        </NavLink>
        <NavLink to="/movies">
          <li>Movies</li>
        </NavLink>
        <NavLink to="/series">
          <li>Tv Shows</li>
        </NavLink>
        <NavLink to="/people">
          <li>People</li>
        </NavLink>
      </ul>
      <div className=" flex items-center gap-5">
        <form onSubmit={onSubmitHandler}>
          <Input
            value={searchValues}
            onChange={onChangeHandler}
            placeholder={"search"}
            className=" bg-secondary-100 text-slate-50 border-secondary-50 focus:ring-secondary-50"
          />
        </form>
        <Button className=" bg-primary text-slate-100">Sign In</Button>
        <Button
          variant="outline"
          className="bg-black border-primary  text-slate-100"
        >
          <Plus size={"20px"} className=" mr-1" />
          Add
        </Button>
      </div>
    </div>
  );
};

export default NavbarComponent;
