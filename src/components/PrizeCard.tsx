import React from "react";

interface PrizeCardProps {
  imageSrc: string;
  drawNumber: string;
  unlockTime: string;
  bgcard: string;
  isActive?:boolean;
}

const PrizeCard: React.FC<PrizeCardProps> = ({
  imageSrc,
  drawNumber,
  unlockTime,
  bgcard,
  isActive,
}) => {
  return (
    <div className={`flex justify-between p-4 ${bgcard} rounded-lg`}>
      <div className="flex justify-start items-start gap-2">
        <img src={imageSrc} alt="Lock" />
        <div className="flex flex-col gap-1">
          <p className={`font-bold text-sm leading-normal text-white`}>
            {drawNumber}
          </p>
          <p
            className={`font-normal text-xs leading-normal ${
              isActive ? "text-white" : "text-[#919499]"
            }`}
          >
            {unlockTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrizeCard;
