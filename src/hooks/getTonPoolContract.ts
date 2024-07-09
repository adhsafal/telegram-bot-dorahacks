import { Address, OpenedContract } from "ton-core";
import { Tonpool } from "../contracts/tonPoolContract";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { CHAIN } from "@tonconnect/ui-react";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";

export const getTonPoolContract = () => {
  const { client } = useTonClient();
  const { network } = useTonConnect();

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

  return tonPoolContract;
};
