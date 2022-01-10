import axios from "axios";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { SideBySideMagnifier, MOUSE_ACTIVATION } from "react-image-magnifiers";

interface cardTagProps {
  cardtagtype: "primary" | "danger" | "success";
  title: string;
}

interface CardProps {
  imageUrl: string;
  rovername: string;
  camera: string;
  earthdate: string;
  isLike: boolean;
  handleLike: () => void;
  handledislike: () => void;
}

const CardTag: React.FC<cardTagProps> = ({ cardtagtype = "danger", title }) => {
  let cardProp = {
    danger: {
      cssproperty: "bg-red-200 text-red-700",
    },
    success: {
      cssproperty: "bg-green-200 text-green-700",
    },
    primary: {
      cssproperty: "bg-blue-200 text-blue-700",
    },
  } as any;
  return (
    <div
      className={`px-2 py-[0.5] ${cardProp[cardtagtype].cssproperty} rounded`}
    >
      {title}
    </div>
  );
};

const Card: React.FC<CardProps> = ({
  imageUrl,
  rovername,
  camera,
  earthdate,
  isLike,
  handleLike,
  handledislike,
}) => {
  const [islike, setIsLike] = React.useState(false);
  const [hver, setHver] = React.useState(false);

  const cardProptagsList = [
    {
      type: "danger",
      name: "Rover Name",
      value: rovername,
    },
    {
      type: "success",
      name: "Camera Name",
      value: camera,
    },
    {
      type: "primary",
      name: "Earth Date",
      value: earthdate,
    },
  ];
  return (
    <div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg relative mx-2 my-2 w-[400px] h-[400px] "
      onMouseMove={() => setHver(true)}
      onMouseLeave={() => setHver(false)}
    >
      <img src={imageUrl} alt="mars" className="w-full z-1 bg-cover h-full" />
      {hver && (
        <div
          className="absolute bottom-0 bg-yellow-100 z-2 h-[50%] w-full bg-opacity-50 "
          style={{ backdropFilter: "blur(2px)" }}
        >
          {cardProptagsList.map((item, index) => {
            return (
              <div
                className="flex mx-2 my-3 justify-evenly"
                key={`${item.name + index}`}
              >
                <CardTag
                  cardtagtype={
                    item.type.toLowerCase() as cardTagProps["cardtagtype"]
                  }
                  title={item.name}
                />
                <h3 className="text-black font-medium flex justify-center align-items-center mx-2 font-bold">
                  {item.value}
                </h3>
              </div>
            );
          })}

          <div className="flex justify-center align-items-center hover:cursor-pointer">
            {isLike ? (
              <FcLike
                fontSize={28}
                onClick={() => {
                  handledislike();
                  setIsLike(false);
                }}
              />
            ) : (
              <AiOutlineHeart
                fontSize={28}
                onClick={() => {
                  handleLike();
                  setIsLike(true);
                }}
                color="black"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
