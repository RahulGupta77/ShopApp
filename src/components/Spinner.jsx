import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="h-screen relative left-1/2 top-60">
      <div className="custom-loader"></div>
    </div>
  );
};

export default Spinner;
