import React from "react";
import Line from "../images/line.svg";

const InfoList = () => {
  return (
    <div className="flex flex-col my-3">
      <div className="flex justify-between my-1">
        <p className="text-[#8a8f92] text-lg">Weekly Change of Winning</p>
        <p className="text-white text-lg">1 in ∞</p>
      </div>
      <img src={Line} alt="" className="self-centegr my-3" />
      <p className="m-0 text-white text-base my-1">Estimated Network Fees</p>
      <div className="flex justify-between my-1">
        <p className="text-[#8a8f92] text-base">Approval</p>
        <p className="text-white text-base">-</p>
      </div>
      <div className="flex justify-between my-1">
        <p className="text-[#8a8f92] text-l">Deposit</p>
        <p className="text-white text-base">$0.30</p>
      </div>
      <div className="flex justify-between my-1">
        <p className="text-[#8a8f92] text-base">Withdrawal</p>
        <p className="text-white text-base">$0.27</p>
      </div>
    </div>
  );
};

export default InfoList;
