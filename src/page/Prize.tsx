import cup1 from "../images/cup2.svg";
import PrizeCard from "../components/PrizeCard";
export default function Prize() {
  return (
    <>
      <div className="w-full h-full flex gap-5 flex-col items-center">
        <div className=" w-full h-fit bg-[transparent] flex flex-col  gap-[24px]">
          <div className=" flex flex-col gap-[8px]">
            <p className="text-sm font-normal leading-normal text-[#919499]">
              Total Won
            </p>
            <p className="text-2xl font-bold text-white  leading-normal">
              5.00
            </p>
          </div>
          <hr className="border-[#919499]" />
          <div className="flex flex-col gap-[16px]  text-[#919499]">
            <p className="font-normal text-sm  leading-normal">Past Winnings</p>
            <PrizeCard
              imageSrc={cup1}
              drawNumber="Won 5.00 USDC"
              bgcard="customGradient"
              unlockTime="#2 Thursday, Dec 16,2:00 PM"
              isActive
            />
            <PrizeCard
              imageSrc={cup1}
              drawNumber="No Prize Won"
              bgcard="bg-[#222B34]"
              unlockTime="#61 Thursday, Dec 16,2:00 PM"
            />
          </div>
        </div>
      </div>
    </>
  );
}
