import { TonConnectButton } from "@tonconnect/ui-react";
import InfoList from "../components/InfoList";
import Input from "../components/Input";
import RiskInfoCard from "../components/RiskInfoCard";
import { useTonConnect } from "../hooks/useTonConnect";
import { usePageContext } from "../hooks/usePageContext";

const DepositCard = () => {
  const { sender, connected, wallet, network } = useTonConnect();

  const { setPageNumber, pageNumber } = usePageContext();

  return (
    <div className="w-full h-full flex gap-5 flex-col items-center px-4">
      <div className="w-[98%] max-w-[420px] h-fit bg-[transparent] flex flex-col rounded-2xl">
        <div className="h-[600px] sm:h-fit">
          <Input />
          <InfoList />
          <RiskInfoCard />
        </div>
        {!connected ? (
          <div id="ton">
            <TonConnectButton />
          </div>
        ) : (
          <button
            className="border-none outline-none p-4 rounded-lg font-bold text-base bg-[#3E88F7] text-white my-3"
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Approve USDC
          </button>
        )}
      </div>
    </div>
  );
};

export default DepositCard;
