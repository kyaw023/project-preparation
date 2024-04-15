import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const ProgressCircleComponent = () => {
  const percentage = 66;
  return (
    <div className="flex items-center gap-2 mt-4 ">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        className="bg-secondary-100 w-14 h-14 rounded-full bor"
        backgroundPadding={6}
        // styles={buildStyles({
        //   backgroundColor: "#3e98c7",
        //   textColor: "#fff",
        //   pathColor: "#fff",
        //   trailColor: "transparent",
        // })}
      />
      <h1 className=" text-2xl font-semibold text-white">Use Score</h1>
    </div>
  );
};

export default ProgressCircleComponent;
