import React, { useEffect, useState } from "react";
import ExchangeIcon from "../images/exchange.svg";
import WalletIcon from "../images/wallet.svg";
import SmallLogo from "../images/small_logo.svg";

const Redirection = () => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="w-full h-[100vh] flex gap-5 flex-col items-center justify-center">
      <div className="w-[98%] max-w-[420px] h-[500px] flex flex-col items-center justify-center rounded-2xl bg-transparent">
        <div className="flex justify-center flex-col items-center gap-8">
          <div className="flex gap-5">
            <div className="bg-white h-[100px] w-[100px] flex justify-center items-center rounded-[50%]">
              <img src={WalletIcon} alt="" className="h-[40px]" />
            </div>
            <img src={ExchangeIcon} alt="" />
            <div className="bg-[#5A5AF5] h-[100px] w-[100px] flex justify-center items-center rounded-[50%]">
              <img src={SmallLogo} alt="" className="h-[40px]" />
            </div>
          </div>
          <div className="flex justify-center flex-col items-center gap-7">
            <p className="text-[#8a8f92]">redirecting in ...</p>
            <p className="text-5xl">{formatTime(seconds)}</p>
          </div>
        </div>
      </div>
      <p className="text-[#8a8f92] max-w-[300px] text-center self-center">
        Do not press back or close this screen until the transaction is complete
      </p>
    </div>
  );
};

export default Redirection;
