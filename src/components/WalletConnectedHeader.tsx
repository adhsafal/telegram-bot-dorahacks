import { TonConnectButton } from "@tonconnect/ui-react";
import React from "react";
import SmallLogo from "../images/small_logo.svg";
import FullLogo from "../images/full_logo.svg";
import Avatar from "../images/avatar.svg";
import Menu from "../images/menu.svg";
import { useTonConnect } from "../hooks/useTonConnect";
import isMobile from "is-mobile";

const WalletConnectedHeader = () => {
  const { connected, network } = useTonConnect();

  return (
    <div className="my-4">
      <div className="flex justify-between px-4">
        <img src={isMobile() ? SmallLogo : FullLogo} alt="" />
        {connected && (
          <div id="connected-btn" className="flex">
            <img src={Avatar} alt="" />
            <TonConnectButton />
            <img src={Menu} alt="" />
          </div>
        )}
      </div>
      <div className="h-[0.5px] bg-white w-full opacity-20 mt-4"></div>
    </div>
  );
};

export default WalletConnectedHeader;
