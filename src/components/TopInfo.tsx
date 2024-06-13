import { usePageContext } from "../hooks/usePageContext";
import BackButton from "../images/back_button.svg";

const TopInfo = () => {
  const { pageNumber, setPageNumber } = usePageContext();
  return (
    <div>
      {pageNumber === 0 ? (
        <div className="w-full flex flex-col gap-3">
          <p className="text-white font-normal m-0 text-center text-base sm:text-xl">
            Deposit tokens, win prizes
          </p>
          <p className="text-[#50b7fc] font-bold m-0 text-center text-xl sm:text-3xl">
            Withdraw anytime, no loss
          </p>
        </div>
      ) : (
        <div className="w-[98%] max-w-[420px] flex flex-col gap-3 justify-center items-center">
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
      )}
    </div>
  );
};

export default TopInfo;
