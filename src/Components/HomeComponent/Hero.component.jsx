import React from "react";
import { Button } from "../ui/button";
import SlideComponent from "./Slide.component";

const HeroComponent = () => {
  return (
    <div className=" mt-20 flex items-center gap-10">
      <div className=" space-y-6 w-full">
        <h1 className=" text-white text-5xl font-semibold max-w-[600px] leading-[64px]">
          Your ultimate destination for top-quantity TV shows, Movies and
          more...
        </h1>
        <p className=" text-secondary-50">
          A library of movies and TV shows you can watch anywhere
        </p>
        <div className=" space-x-4">
          <Button className=" bg-primary text-slate-100">Subscribe</Button>
          <Button
            variant="outline"
            className=" bg-black text-slate-100 border-primary"
          >
            Free Trial
          </Button>
        </div>
      </div>
      <div className=" w-full">
        <SlideComponent />
      </div>
    </div>
  );
};

export default HeroComponent;
