import { useTonConnect } from "./useTonConnect";
import { Address } from "ton-core";
import { useQuery } from "@tanstack/react-query";
import { getTonPoolContract } from "./getTonPoolContract";

export function useTonPoolDetails() {
  const { wallet } = useTonConnect();

  const tonPoolContract = getTonPoolContract();

  const { data: balanceDetails, isFetching: isFetchingBalance } = useQuery(
    ["balanceDetails"],
    async () => {
      if (!tonPoolContract) return null;
      if (!wallet) return null;
      const userAddress = Address.parse(wallet);
      return await tonPoolContract.getGetBalanceDetails(userAddress);
    },
    { refetchInterval: 10000 }
  );

  const { data: activeContest, isFetching: isFetchingContest } = useQuery(
    ["activeContest"],
    async () => {
      if (!tonPoolContract) return null;
      return await tonPoolContract.getGetActiveContest();
    },
    { refetchInterval: 10000 }
  );

  return {
    balanceDetails: isFetchingBalance ? null : balanceDetails,
    activeContest: isFetchingContest ? null : activeContest,
    address: tonPoolContract?.address.toString(),
  };
}

// sendTransaction: (message: any) => {
//       const args = { value: BigInt(1000000000), bounce: false }; // Adjust args as needed
//       return tonPoolContract?.send(sender, args, message);
//     },
