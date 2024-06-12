import React from "react";
import PoolCard from "../components/PoolCard";

const Pools = () => {
  return (
    <div className="flex flex-col gap-2">
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
    </div>
  );
};

export default Pools;
