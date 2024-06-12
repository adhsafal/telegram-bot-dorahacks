import NextArrow from "../images/nextArrow.svg";
export default function Account() {
  return (
    <>
      <div className="w-full h-full flex gap-5 flex-col items-center">
        <div className="w-[98%] max-w-[420px] h-fit bg-[transparent] flex flex-col rounded-2xl gap-[24px]">
          <div className="flex flex-col gap-[16px]">
            <div className=" text-white flex flex-col gap-[8px]">
              <p className="text-sm font-normal leading-normal">
                Total balance
              </p>
              <div className="flex">
                <p className="text-2xl font-bold leading-normal">$1231.00</p>
                <img src={NextArrow} alt="NextArrow" />
              </div>
            </div>
            <button className="border-none outline-none p-4 rounded-lg font-bold text-base bg-white text-black ">
              Withdraw Balance
            </button>
          </div>
          <hr className="text-white" />
          <div className="text-white flex flex-col gap-[16px]">
            <p className="text-sm font-normal leading-normal">Winning</p>
            <div className="flex bg-[#222B34] px-[16px] py-[18px] justify-between items-center rounded-[4px]">
              <p className="text-sm font-normal leading-normal">
                🎉 Total claimed winnings!
              </p>
              <div className="flex">
                <p className="text-base font-semibold leading-normal">
                  🏆 $0.0
                </p>
                <img src={NextArrow} alt="NextArrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
