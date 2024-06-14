import PoolCard from "../components/PoolCard";

const Pools = () => {
  return (
    <div className="flex flex-col gap-2 px-4">
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
      />
    </div>
  );
};

export default Pools;
