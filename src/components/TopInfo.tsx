import { usePageContext } from "../hooks/usePageContext";
import BackButton from "../images/back_button.svg";

const TopInfo = () => {
  const { pageNumber, setPageNumber } = usePageContext();

  if (pageNumber === 0)
    return (
      <div className="w-full flex flex-col gap-3">
        <p className="text-white font-normal m-0 text-center text-base sm:text-xl">
          Deposit tokens, win prizes
        </p>
        <p className="text-[#50b7fc] font-bold m-0 text-center text-xl sm:text-3xl">
          Withdraw anytime, no loss
        </p>
      </div>
    );
  else if (pageNumber === 1)
    return (
      <div className="w-full max-w-[420px] flex flex-col gap-3 justify-center items-center px-4 sm:px-0">
        <img
          src={BackButton}
          alt=""
          className="w-fit self-start mb-5 cursor-pointer"
          onClick={() => setPageNumber(pageNumber - 1)}
        />
        <p className="text-white font-normal m-0 text-center text-base sm:text-xl max-w-[300px] sm:max-w-[350px]">
          Deposit to Prize USDC on Optimism Sepolia
        </p>
      </div>
    );
  else return <></>;
};

export default TopInfo;
