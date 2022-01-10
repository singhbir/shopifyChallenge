import React from "react";
import "../../App.css";
import { AiFillDownCircle } from "react-icons/ai";

const NasaPage = () => {
  const printedString = "NASA";
  return (
    <div className="flex h-[100vh] justify-center items-center flex-col ">
      <div className="flex h-max ">
        {printedString.split("").map((item: string) => {
          return (
            <h1 className="nasa-font" style={{ fontSize: "20rem" }}>
              {item.toUpperCase()}
            </h1>
          );
        })}
      </div>
      <br />
      <div className="flex justify-center items-center flex-col">
        <AiFillDownCircle fontSize={30} />
        <br />
        <h3>Scroll Down</h3>
      </div>
    </div>
  );
};

export default NasaPage;
