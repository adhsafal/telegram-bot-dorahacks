import React from "react";
import USDC from "../images/usdc.svg";

const Submitted = () => {
  return (
    <div className="w-full h-full flex gap-5 flex-col items-center justify-center my-16 sm:m-0">
      <div className="w-[98%] max-w-[420px] h-[500px] flex flex-col items-center justify-center rounded-2xl bg-transparent sm:bg-[#232a34] px-3">
        <img src={USDC} alt="" className="h-[80px] mb-3" />
        <p className="text-base font-bold m-0 mb-3">Deposit Submitted</p>
        <p className="text-sm font-semibold text-[#8a8f92] mb-4">
          Your deposit is eligible for all future draws!
        </p>
        <button className=" w-full text-white text-base font-bold border-[1px] rounded-md border-white py-3 mb-3">
          View Ticket
        </button>
        <button className="w-full text-white text-base font-bold border-[1px] rounded-md border-white py-3">
          View Account
        </button>
      </div>
    </div>
  );
};

export default Submitted;
