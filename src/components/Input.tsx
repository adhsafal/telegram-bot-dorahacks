import React from "react";
import USDC from "../images/usdc.svg";

const Input = () => {
  return (
    <div className="rounded-2xl border-[1px] border-white-30 bg-[rgba(34, 43, 52, 1)] w-fit h-fit px-4 py-5 bg-[#232a34]">
      <div className="flex items-center gap-3">
        <input
          type="number"
          className="border-none outline-none bg-transparent text-xl"
          placeholder="0"
        />
        <div className="flex gap-1">
          <img src={USDC} alt="" />
          <span>USDC</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-[#8a8f92] text-[13px]">$0.00</span>
        <span className="text-[#8a8f92] text-[13px]">Balance: 0</span>
      </div>
      <p className="m-0 text-[13px] text-[#DB963B]">
        Not enough USDC in wallet
      </p>
    </div>
  );
};

export default Input;
