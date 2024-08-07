import { TonConnectButton } from "@tonconnect/ui-react";
import InfoList from "../components/InfoList";
import Input from "../components/Input";
import RiskInfoCard from "../components/RiskInfoCard";
import { useTonConnect } from "../hooks/useTonConnect";
import { usePageContext } from "../hooks/usePageContext";
import { useDeposit } from "../hooks/useDeposit";

const DepositCard = () => {
  const { sender, connected, wallet, network } = useTonConnect();

  const { setPageNumber, pageNumber } = usePageContext();

  const { makeDeposit } = useDeposit();
  const handleApprove = async () => {
    // makeDeposit(2);
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className="w-full h-full flex gap-5 flex-col items-center px-4">
      <div className="w-[98%] max-w-[420px] h-fit bg-[transparent] flex flex-col rounded-2xl">
        <div className="h-fit sm:h-[600px]">
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
            onClick={handleApprove}
          >
            Approve USDC
          </button>
        )}
      </div>
    </div>
  );
};

export default DepositCard;
