import React from "react";
import "./NoPageFound.css";

const NoPostsFound = () => {
  return (
    <div className="h-screen w-screen">
      <svg className="text-5xl  sm:text-8xl lg:text-9xl">
        <text x="50%" y="40%" dy="0.3em" textAnchor="middle">
          No Page Found
        </text>
      </svg>
    </div>
  );
};

export default NoPostsFound;
