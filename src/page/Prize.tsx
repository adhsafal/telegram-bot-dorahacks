import Timer from "../components/Timer";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Lock from "../images/lock.svg";
import cup from "../images/cup1.svg";
import cup1 from "../images/cup2.svg";
import PrizeCard from "../components/PrizeCard";
export default function Prize() {
  return (
    <>
      <div className="w-full h-full flex gap-5 flex-col items-center">
        <div className="w-[98%] max-w-[420px] h-fit bg-[transparent] flex flex-col rounded-2xl gap-[24px]">
          <div className="bg-[#82FBE3] flex flex-col gap-[11px] p-[16px]">
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-sm text-[#222B34]">Draw #63</p>
                <p className="font-normal text-xs text-[#222B34]">
                  Friday, DEC 17, 2:00 PM
                </p>
              </div>
              <div className="flex  justify-end items-start">
                <div className="flex   flex-col gap-1 items-end">
                  <p className="text-sm font-bold leading-normal">$1231.00</p>
                  <p className="font-normal text-xs text-[#222B34]">
                    View Prize Tiers
                  </p>
                </div>

                <MdOutlineKeyboardArrowRight className="text-[18px]" />
              </div>
            </div>
            <Timer
              initialTime={{
                days: 0,
                hours: 21,
                minutes: 0,
                seconds: 0,
              }}
            />
          </div>

          <div className="flex flex-col gap-[16px] px-[16px] text-white">
            <p className="font-normal text-sm  leading-normal">Past Draws</p>
            <PrizeCard
              imageSrc={Lock}
              drawNumber="Draw #63"
              unlockTime="unlocks in 21 hours 22 minutes"
              price="$2500.00"
              prizeText="In prizes"
            />
            <PrizeCard
              imageSrc={cup}
              drawNumber="Claimed 5.00 USDC"
              unlockTime="#2 Thursday, Dec 16,2:00 PM"
              drawNumberColor="text-[#82FBE3]"
            />
            <PrizeCard
              imageSrc={cup1}
              drawNumber="No Prize Won"
              unlockTime="#61 Thursday, Dec 16,2:00 PM"
            />
          </div>
        </div>
      </div>
    </>
  );
}
