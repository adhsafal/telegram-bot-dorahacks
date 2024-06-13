import React from "react";
import BackArrow from "../images/back_button.svg";

const BackAndTitle = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[98%] max-w-[420px]">
        <div className="flex gap-5">
          <img src={BackArrow} alt="" />
          <p className="text-base font-semibold">Total Balance</p>
        </div>
        <div className="h-[0.5px] bg-white w-full opacity-20 my-4"></div>
      </div>
    </div>
  );
};

export default BackAndTitle;
