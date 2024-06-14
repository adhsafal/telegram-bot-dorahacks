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
import DepositCard from "./page/DepositCard";
import Account from "./page/Account";
import WalletConnectedHeader from "./components/WalletConnectedHeader";
import Pools from "./page/Pools";
import Prize from "./page/Prize";
import Redirection from "./page/Redirection";
import Submitted from "./page/Submitted";
import { useCallback, useEffect } from "react";
import { usePageContext } from "./hooks/usePageContext";
import Header from "./components/Header";
import Withdraw from "./page/Withdraw";
import BackAndTitle from "./components/BackAndTitle";

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
  const { connected, network } = useTonConnect();
  const { pageNumber, setPageNumber } = usePageContext();

  const handleInitialPagination = useCallback(async () => {
    if (connected) setPageNumber(2);
  }, []);

  useEffect(() => {
    handleInitialPagination();
  }, []);

  const Pages: any = {
    0: <Pools />,
    1: <DepositCard />,
    2: <Account />,
    3: <Withdraw />,
    4: <Prize />,
    5: <Redirection />,
    6: <Submitted />,
  };

  return (
    <StyledApp>
      {connected ? <WalletConnectedHeader /> : <Header />}
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
          // </FlexBoxRow> */}
          {/* {Pages[pageNumber]} */}
          <Pools />
          <DepositCard />
          <Account />
          <Prize />
          <Withdraw />
          {/* <Redirection /> */}
          <Submitted />

          {/* <Counter />
          <TransferTon />
          <Jetton /> */}
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
