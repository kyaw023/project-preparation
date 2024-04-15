import React from "react";
import { Loader2 } from "lucide-react";

const LoadingComponent = () => {
  return (
    <div className=" flex items-center h-screen justify-center">
      <Loader2 className="mr-2 h-6 w-6 animate-spin text-white" />
      <p className=" text-white">Please wait</p>
    </div>
  );
};

export default LoadingComponent;
