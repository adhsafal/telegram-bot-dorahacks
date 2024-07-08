// import { useTonClient } from "./useTonClient";
// import { useAsyncInitialize } from "./useAsyncInitialize";
// import { useTonConnect } from "./useTonConnect";
// import { Address, OpenedContract } from "ton-core";
// import { useQuery } from "@tanstack/react-query";
// import { CHAIN } from "@tonconnect/protocol";
// import { Tonpool } from "../contracts/tonPoolContract";

// export function useDeposit() {
//   const { client } = useTonClient();
//   const { sender, network, wallet } = useTonConnect();

//   const tonPoolContract = useAsyncInitialize(async () => {
//     if (!client) return;
//     const contract = new Tonpool(
//       Address.parse(
//         network === CHAIN.MAINNET
//           ? "EQCgbValz3m_OXNiSw4XifXW0XoYo2VyPNzE-Lfr6nbK74sZ"
//           : "EQCgbValz3m_OXNiSw4XifXW0XoYo2VyPNzE-Lfr6nbK74sZ"
//       ) // replace with your address from tutorial 2 step 8
//     );
//     return client.open(contract) as OpenedContract<Tonpool>;
//   }, [client]);

//   const makeDeposit = async (amount: number) => {
//     if (!tonPoolContract)
//       throw new Error("TonPool contract is not initialized");

//     const amt = BigInt(amount);
//     const withdrawMessage: {
//       $$type: "Withdraw";
//       amount: bigint;
//     } = {
//       $$type: "Withdraw",
//       amount: amt,
//     };
//     const args = {
//       value: BigInt(1000000000), // Adjust value as needed
//       bounce: false,
//     };
//     await tonPoolContract.send(sender, args, withdrawMessage);
//   };

//   return {
//     makeDeposit,
//   };
// }

// // sendTransaction: (message: any) => {
// //       const args = { value: BigInt(1000000000), bounce: false }; // Adjust args as needed
// //       return tonPoolContract?.send(sender, args, message);
// //     },

export function useDeposit() {}
