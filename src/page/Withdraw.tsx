import React from "react";
import BackAndTitle from "../components/BackAndTitle";
import { usePageContext } from "../hooks/usePageContext";
import { useWithdraw } from "../hooks/useWithdraw";

const Withdraw = () => {
  const { pageNumber, setPageNumber } = usePageContext();
  const { makeWithdraw } = useWithdraw();
  const handleWithdraw = () => {
    makeWithdraw(1);
    // setPageNumber(pageNumber + 1);
  };
  return (
    <>
      <BackAndTitle title={"Manage your withdraw"} />
      <div className="w-full f-full flex gap-5 flex-col items-center px-4">
        <div className="w-[98%]  h-fit sm:h-[600px] max-w-[420px] bg-[transparent] flex flex-col justify-between sm:justify-normal rounded-2xl">
          <div className="flex flex-col">
            <p className="mb-2 text-[#8A8F92] text-[14px]">
              Enter amount to withdraw
            </p>
            <div className="rounded-xl border-[1px] border-white-30 bg-[rgba(34, 43, 52, 1)] w-full h-fit px-4 py-5 bg-[#232a34]">
              <div className="flex items-center justify-between">
                <input
                  type="number"
                  className="border-none outline-none bg-transparent text-xl w-[75%]"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-[#8A8F92] text-[14px]">Total Balance</p>
              <p className="font-bold">988.30 USDC</p>
            </div>
            <div className="h-[0.5px] bg-white w-full opacity-20 my-4"></div>
            <div>
              <p className="text-[#8A8F92] text-[14px] mb-1">Address</p>
              <p className="text-sm">momFct4QWxrtwXGE4oswzKZwnXc2gpSqvR</p>
            </div>
          </div>
          <button
            className="border-none outline-none p-4 rounded-lg font-bold text-base bg-[#3E88F7] text-white my-6"
            onClick={handleWithdraw}
          >
            Withdraw Request
          </button>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
