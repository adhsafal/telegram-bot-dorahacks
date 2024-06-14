import React from "react";
import BackArrow from "../images/back_button.svg";

interface PropType {
  title?: string;
}

const BackAndTitle = ({ title }: PropType) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-full sm:max-w-[420px]">
        <div className="flex gap-5 px-4">
          <img src={BackArrow} alt="" />
          <p className="text-base font-bold">{title ?? "Title"}</p>
        </div>
        <div className="h-[0.5px] bg-white w-full opacity-20 mt-4 mb-6"></div>
      </div>
    </div>
  );
};

export default BackAndTitle;
