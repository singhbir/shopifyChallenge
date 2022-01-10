import React from "react";

interface buttonProps {
  title: string;
  className?: string;
  onBtnClick?: () => void;
}

const index: React.FC<buttonProps> = ({ title, className, onBtnClick }) => {
  return (
    <div
      className={`w-[10vw] border-2 border-black bg-white hover:bg-black hover:text-white rounded hover:cursor-pointer ${className}`}
      onClick={onBtnClick}
    >
      {title}
    </div>
  );
};

export default index;
