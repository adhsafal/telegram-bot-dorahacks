import { useTonConnect } from "./useTonConnect";
import { getTonPoolContract } from "./getTonPoolContract";

export function useWithdraw() {
  const { sender } = useTonConnect();

  const tonPoolContract = getTonPoolContract();

  const makeWithdraw = async (amount: number) => {
    if (!tonPoolContract)
      throw new Error("TonPool contract is not initialized");

    const amt = BigInt(amount);
    console.log(amt);
    const withdrawMessage: {
      $$type: "Withdraw";
      amount: bigint;
    } = {
      $$type: "Withdraw",
      amount: amt,
    };
    const args = {
      value: BigInt(1000000000),
      bounce: false,
    };

    console.log(amt);
    await tonPoolContract.send(sender, args, withdrawMessage);
  };

  return {
    makeWithdraw,
  };
}
