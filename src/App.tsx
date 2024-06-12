import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import LogoAndInfo from "./components/LogoAndInfo";
import PoolCard from "./components/PoolCard";

const StyledApp = styled.div`
  background-color: #181f27;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #181f27;
    color: white;
  }
  min-height: 100vh;
  
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

function App() {
  const { network } = useTonConnect();

  return (
    <StyledApp className="px-4">
      <LogoAndInfo />
      <AppContainer>
        <FlexBoxCol>
          {/* <FlexBoxRow>
            <TonConnectButton />
            <Button>
              {network
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
            </Button>
          </FlexBoxRow> */}
          <PoolCard
            initialTime={{
              days: 1,
              hours: 1,
              minutes: 0,
              seconds: 0,
            }}
            middleContentBgColor="#F7D64B"
            poolName="VIP Pool"
            poolTag="Elite Opportunities"
            prizeAmount="5000"
            tagColor="#F7D64B"
            tagBgColor="#F7D64B1A"
          />
          <PoolCard
            initialTime={{
              days: 0,
              hours: 8,
              minutes: 20,
              seconds: 0,
            }}
            middleContentBgColor="#82FBE3"
            poolName="TON Degen Pool"
            poolTag="Huge Reward"
            prizeAmount="5000"
            tagColor="#82FBE3"
            tagBgColor="#82FBE31A"
          />
          <PoolCard
            initialTime={{
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 5,
            }}
            middleContentBgColor="#6FCFFA"
            poolName="Stable Coin Pool (USDT)"
            poolTag="Stable Reward"
            prizeAmount="1000"
            tagColor="#6FCFFA"
            tagBgColor="#6FCFFA1A"
          />
          <Counter />
          <TransferTon />
          <Jetton />
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
