import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract } from "ton-core";
import { useQuery } from "@tanstack/react-query";
import { CHAIN } from "@tonconnect/protocol";
import { Tonpool } from "../contracts/tonPoolContract";

export function useTonPoolContract() {
  const { client } = useTonClient();
  const { sender, network, wallet } = useTonConnect();

  //   const address = "EQDoEr6PFkbvIv_DONMajuoGSlxiF8ndwzxsVM1PUBt9w6xG";

  const tonPoolContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = new Tonpool(
      Address.parse(
        network === CHAIN.MAINNET
          ? "EQCgbValz3m_OXNiSw4XifXW0XoYo2VyPNzE-Lfr6nbK74sZ"
          : "EQCgbValz3m_OXNiSw4XifXW0XoYo2VyPNzE-Lfr6nbK74sZ"
      ) // replace with your address from tutorial 2 step 8
    );
    return client.open(contract) as OpenedContract<Tonpool>;
  }, [client]);

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
