import RedInfo from "../images/red_info.svg";

const RiskInfoCard = () => {
  return (
    <div className="flex gap-2 p-3 bg-[#f9ead9] rounded-md">
      <img src={RedInfo} alt="" className="self-start" />
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-xs text-black">
          Learn about the risks
        </p>
        <p className="text-xs text-black">
          PoolTogether is a permission less protocol. Prize vaults can be
          deployed by anyone. Make sure you know what you are depositing into.
          Learn more about the prize vault.
        </p>
      </div>
    </div>
  );
};

export default RiskInfoCard;
