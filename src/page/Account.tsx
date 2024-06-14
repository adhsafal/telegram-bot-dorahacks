import Timer from "../components/Timer";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function Account() {
  return (
    <>
      <div className="w-full h-full flex gap-5 flex-col items-center px-4">
        <div className="w-[98%] max-w-[420px] h-fit bg-[transparent] flex flex-col rounded-2xl gap-[24px]">
          <div className="flex flex-col gap-[16px]">
            <div className=" flex flex-col gap-[8px]">
              <p className="text-sm font-normal leading-normal text-[#919499]">
                Total Balance
              </p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold text-white  leading-normal">
                  $1231.00
                </p>
                <MdOutlineKeyboardArrowRight className="text-[24px]" />
              </div>
            </div>
            <p className="text-base underline-gap text-[#3E88F7] font-medium leading-normal w-fit">
              Withdraw
            </p>
          </div>
          {/* divider */}
          <hr className="border-[#919499]" />
          {/* ActiveCard */}
          <div className="text-white flex flex-col gap-[16px]">
            <p className="text-sm font-normal leading-normal text-[#919499]">
              Active Ticket
            </p>
            <div className="customGradient flex flex-col gap-[11px] p-[16px] rounded-lg">
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-sm ">Draw #63</p>
                  <p className="font-normal text-xs text-[#e7e7e7]">
                    Friday, DEC 17, 2:00 PM
                  </p>
                </div>
                <div className="flex  justify-end items-start">
                  <div className="flex   flex-col gap-1 items-end">
                    <p className="text-sm font-bold leading-normal">$1231.00</p>
                    <p className="font-normal text-xs text-[#e7e7e7]">
                      View Prize Tiers
                    </p>
                  </div>

                  <MdOutlineKeyboardArrowRight className="text-[24px]" />
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
          </div>
          {/* divider */}
          <hr className="border-[#919499]" />

          <div className="text-white flex flex-col gap-[16px]">
            <p className="text-sm font-normal leading-normal text-[#919499]">
              Winning
            </p>
            <div className="flex bg-[#222B34] px-[16px] py-[18px] justify-between items-center rounded-lg">
              <p className="text-sm font-normal leading-normal">
                Total winnings!
              </p>
              <div className="flex">
                <p className="text-base font-semibold leading-normal">
                  🏆 $5.0
                </p>
                <MdOutlineKeyboardArrowRight className="text-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
