import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useGetMultiSearchQuery } from "../../store/endpoints/Search.endpoint";
import {
  Asterisk,
  Cloud,
  CreditCard,
  Crown,
  Github,
  Keyboard,
  LifeBuoy,
  List,
  LogOut,
  Mail,
  MessageSquare,
  PictureInPicture2,
  Plus,
  PlusCircle,
  Settings,
  Speech,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { useGetAccountDetailQuery } from "../../store/endpoints/General.endpoint";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../Components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "../../Components/ui/dropdown-menu";
import { useLogoutMutation } from "../../store/endpoints/Auth.endpoint";
import { Toaster, toast } from "sonner";

const NavbarComponent = () => {
  const [searchValues, setSearchValues] = useState("");
  const navigator = useNavigate();
  const onChangeHandler = (e) => {
    setSearchValues(e.target.value);
  };

  const { data } = useGetMultiSearchQuery(searchValues);

  const [logoutFun, { data: logoutData }] = useLogoutMutation();

  console.log(data);

  const queryName = data?.results[0]?.media_type;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigator(`/search/${queryName}/${searchValues}`, {
      state: { data, searchValues },
    });
    setSearchValues("");
  };

  const { data: accountDetail } = useGetAccountDetailQuery(
    localStorage.getItem("sessionID")
  );

  const logoutHandler = async () => {
    localStorage.removeItem("sessionID");
    await logoutFun(localStorage.getItem("sessionID"));
    navigator("/sign-in");
    toast.success("Logout Successfuly");
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
        <div>
          {!localStorage.getItem("sessionID") ? (
            <Link to={"/sign-In"}>
              <Button className=" bg-primary text-slate-100">Sign In</Button>
            </Link>
          ) : (
            <div className="">
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar>
                      <AvatarImage
                        className=" w-14 h-14 object-cover"
                        src={
                          "https://image.tmdb.org/t/p/w500" +
                          accountDetail?.avatar?.tmdb?.avatar_path
                        }
                      />
                      <AvatarFallback>{accountDetail?.username}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <div className=" flex flex-col space-y-1">
                          <h1 className=" text-lg text-slate-900 font-semibold">
                            {accountDetail?.username}
                          </h1>
                          <span className=" text-slate-500 text-xs">
                            View Profile
                          </span>
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Speech className="mr-2 h-4 w-4" />

                      <span>Discussions</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <List className="mr-2 h-4 w-4" />
                      <span>Lists</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Asterisk className="mr-2 h-4 w-4" />
                      <span>Rating</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <PictureInPicture2 className="mr-2 h-4 w-4" />
                      <span>WatchList</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Crown className="mr-2 h-4 w-4" />
                      <span>Favourite</span>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <span>Edit Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Setting</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logoutHandler}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          )}
        </div>
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
