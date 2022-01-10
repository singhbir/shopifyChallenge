import React from "react";
import { Plane } from "react-loader-spinner";
const index = () => {
  return (
    <div className="flex justify-center align-center">
      <Plane aria-label="Loading" color="red" secondaryColor="yellow" />
    </div>
  );
};

export default index;
