import { useTonConnect } from "./useTonConnect";
import { getTonPoolContract } from "./getTonPoolContract";

export function useDeposit() {
  const { sender } = useTonConnect();

  const tonPoolContract = getTonPoolContract();

  const makeDeposit = async (amount: number) => {
    if (!tonPoolContract)
      throw new Error("TonPool contract is not initialized");

    const amt = BigInt(amount);
    console.log("amt", amt);
    const withdrawMessage: {
      $$type: "Deposit";
      amount: bigint;
    } = {
      $$type: "Deposit",
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
    makeDeposit,
  };
}
