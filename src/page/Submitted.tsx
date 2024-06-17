import React from "react";
import USDC from "../images/usdc.svg";
import Timer from "../components/Timer";

const Submitted = () => {
  return (
    <div className="w-full h-full flex gap-5 flex-col items-center justify-center sm:m-0">
      <div className="w-[98%] max-w-[420px] h-[650px] flex flex-col items-center justify-center rounded-2xl bg-transparent sm:bg-[#232a34] px-3">
        <img src={USDC} alt="" className="h-[80px] mb-3" />
        <p className="text-base font-bold m-0 mb-3">Deposit Submitted</p>
        <p className="text-sm font-semibold text-[#8a8f92] mb-4">
          Your now have x ticket in the VIP Pool!
        </p>
        <p>The next prize will be award in:</p>
        <div className="my-3">
          <Timer
            initialTime={{
              days: 0,
              hours: 21,
              minutes: 0,
              seconds: 0,
            }}
          />
        </div>
        <div className="w-full mt-6 ">
          <button className=" w-full text-white text-base font-bold border-[1px] rounded-md border-white py-3 mb-3">
            View Ticket
          </button>
          <button className="w-full text-white text-base font-bold border-[1px] rounded-md border-white py-3">
            View Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submitted;
