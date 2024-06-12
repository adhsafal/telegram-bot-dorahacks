import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface PrizeCardProps {
  imageSrc: string;
  drawNumber: string;
  unlockTime: string;
  price?: string;
  prizeText?: string;
  drawNumberColor?:string;
}

const PrizeCard: React.FC<PrizeCardProps> = ({
  imageSrc,
  drawNumber,
  unlockTime,
  price,
  prizeText = "In prizes",
  drawNumberColor='text-white',
}) => {
  return (
    <div className="flex justify-between p-4 bg-[#222B34] rounded-[4px]">
      <div className="flex justify-start items-start gap-2">
        <img src={imageSrc} alt="Lock" />
        <div className="flex flex-col gap-1">
          <p className={`font-bold text-sm leading-normal ${drawNumberColor }`}>{drawNumber}</p>
          <p className="font-normal text-xs leading-normal">{unlockTime}</p>
        </div>
      </div>
      <div className="flex items-center">
        {price && (
          <div className="flex flex-col gap-1 items-end">
            <p className="font-bold text-sm leading-normal">{price}</p>
            <p className="font-normal text-xs leading-normal">{prizeText}</p>
          </div>
        )}
        <MdOutlineKeyboardArrowRight className="text-lg text-white" />
      </div>
    </div>
  );
};


export default PrizeCard;
