import { TonConnectButton } from "@tonconnect/ui-react";
import InfoList from "../components/InfoList";
import Input from "../components/Input";
import RiskInfoCard from "../components/RiskInfoCard";
import { useTonConnect } from "../hooks/useTonConnect";

const DepositCard = () => {
  const { sender, connected, wallet, network } = useTonConnect();
  console.log({
    sender: sender,
    connected: connected,
    wallet: wallet,
    network,
  });
  return (
    <div className="w-full h-full flex gap-5 flex-col items-center">
      <div className="w-[98%] max-w-[420px] h-fit bg-[transparent] flex flex-col rounded-2xl">
        <Input />
        <InfoList />
        <RiskInfoCard />
        {!connected ? (
          <div id="ton">
            <TonConnectButton />
          </div>
        ) : (
          <button className="border-none outline-none p-4 rounded-lg font-bold text-base bg-white text-black my-3">
            Approve USDC
          </button>
        )}
      </div>
    </div>
  );
};

export default DepositCard;
