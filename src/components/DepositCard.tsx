import InfoList from "./InfoList";
import Input from "./Input";
import RiskInfoCard from "./RiskInfoCard";

const DepositCard = () => {
  return (
    <div className="w-full h-full flex gap-5 flex-col items-center">
      <div className="w-[98%] max-w-[420px] h-fit bg-[transparent] flex flex-col rounded-2xl">
        <Input />
        <InfoList />
        <RiskInfoCard />
        <button className="border-none outline-none p-4 rounded-lg font-bold text-base bg-white text-black my-3">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default DepositCard;
