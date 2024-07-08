import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { CardData, cardType, howToParticipate, quickStep } from "../helper";
import FullLogo from "../images/full_logo.svg";

export const Dashboard: any = () => {
  const navigate = useNavigate();
  const handleUseTonPool = () => {
    navigate("/app");
  };
  return (
    <section className=" bg-primary pb-[59px] sm:pb-[40px] ">
      <article className="relative z-20 bg-secondary-img bg-no-repeat w-full bg-center bg-cover ">
        <div className="bg-hero-image">
          <div className="  z-10  px-[46px] pt-[46px] flex items-center justify-between sm:justify-center">
            <img src={FullLogo} alt="logo" />
            <div className=" sm:hidden">
              <button
                className="w-[180px] h-[48px] flex items-center justify-center rounded-[8px] !bg-white"
                onClick={handleUseTonPool}
              >
                <p className=" font-semibold text-[18px] leading-[26px] public-sans">
                  Use Tonpool
                </p>
              </button>
            </div>
          </div>
          <div className="     w-full pt-[169px] sm:pt-[97px]  flex items-center flex-col justify-center ">
            <div className="relative bg-[#5A5AF5]/20 w-[288px] h-[42px] flex items-center justify-center">
              <p className=" absolute -top-[14px] -left-[8px] font-normal text-[24px] leading-[29px] text-white">
                +
              </p>
              <p className=" absolute -top-[14px] -right-[8px] font-normal text-[24px] leading-[29px] text-white">
                +
              </p>
              <p className=" absolute -bottom-[14px] -left-[8px] font-normal text-[24px] leading-[29px] text-white">
                +
              </p>
              <p className=" absolute -bottom-[14px] -right-[8px] font-normal text-[24px] leading-[29px] text-white">
                +
              </p>
              <p className=" text-white font-normal text-[18px] leading-[21px] sm:text-[16px] sm:leading-[19px]">
                🎉 Win $1500 every week
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center mt-[14px] sm:mt-[46px]">
              <p className=" font-bold text-[80px] sm:text-[24px] sm:leading-[30px] leading-[96px] text-[#3E88F7]">
                Stake Smart, Win Big
              </p>
              <p className="my-[8px] font-normal text-white text-[80px] leading-[96px] sm:text-[18px] sm:leading-[28px]">
                With Zero Risk!
              </p>
              <div className=" w-[1016px] sm:w-[298px]">
                <p className=" font-normal text-[24px] leading-[29px] text-white/50 text-center sm:text-[12px] sm:leading-[18px]">
                  join no-loss Ton Pools and connect with a like-minded
                  community through dedicated Telegram pool groups on the TON
                  Blockchain.
                </p>
              </div>
              <button className="mt-[42px] w-[296px] h-[58px] sm:h-[48px] flex items-center justify-center rounded-[8px] !bg-white">
                <p className=" uppercase font-semibold text-[18px] public-sans leading-[26px] sm:text-[15px] sm:leading-[26px]">
                  Join the POOL
                </p>
              </button>
              <div className=" py-[180px] sm:pt-[80px] sm:pb-[120px] px-[16px] text-center flex flex-col items-center justify-center">
                <p className=" font-normal  text-[16px] leading-[26px] text-white/50 sm:text-[12px] sm:leading-[18px]">
                  Tonpool is a no loss, audited savings game powered by
                  blockchain technology
                </p>
                <p className=" font-bold text-[16px] leading-[26px] text-[#3E88F7]">
                  -Learn how it work{" "}
                </p>
              </div>
            </div>
            <article>
              <div className=" flex flex-col items-center justify-center">
                <p className=" font-normal text-[20px] leading-[24px] text-white/50 sm:font-light sm:text-[12px] sm:leading-[18px] ">
                  How does it work
                </p>
                <p className=" font-normal text-[52px] leading-[62px] text-white sm:text-[18px] sm:leading-[21px]">
                  TonPool is for
                </p>
                <p className=" font-bold text-[60px] leading-[72px] text-[#50B7FC] sm:text-[24px] sm:leading-[30px]">
                  Saving & Winning
                </p>
              </div>
            </article>
          </div>
        </div>
      </article>

      <section className=" px-[100px] mt-[110px] sm:mt-[33px] sm:px-[40px]">
        <article className=" grid grid-cols-4 sm:grid-cols-1 items-center gap-x-[40px] sm:gap-y-[24px]">
          {CardData.map((item: cardType) => (
            <div
              key={item.title}
              className=" grid gap-y-[42px] sm:gap-y-[24px] place-content-center"
            >
              <img
                src={item.img as string}
                alt={item?.title}
                className=" !w-full object-cover"
                height={214}
              />
              <div className="text-center flex flex-col gap-y-[12px]">
                <p className=" font-semibold text-[24px] leading-[29px] text-white sm:text-[20px] sm:leading-[24px]">
                  {item.title}
                </p>
                <p className=" font-light text-[20px] leading-[28px] text-white/50 sm:text-[18px] sm:leading-[24px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </article>
      </section>
      <section className="mt-[159px] px-[220px] sm:px-[16px]">
        <article>
          <div className=" text-center flex flex-col gap-y-[16px]">
            <p className=" font-normal sm:font-light text-[20px] leading-[24px] text-white/50 sm:text-[12px] sm:leading-[18px]">
              TonPool learning Center
            </p>
            <p className=" font-normal text-[52px] leading-[62px] text-white sm:text-[18px] sm:leading-[21px]">
              FAQs
            </p>
          </div>
          <div className="mt-[42px] bg-[#3E88F7]/20 rounded-[14px] shadow-[#4A3AFF30] overflow-hidden">
            <div className="px-[84px] py-[42px] sm:py-[24px] sm:px-[16px]">
              <div>
                <p className=" font-semibold text-[20px] leading-[32px] text-white">
                  Quick Steps to Get Started
                </p>
                <p className=" font-normal text-[16px] leading-[20px] text-white/50 sm:text-[12px] sm:leading-[18px]">
                  It’s more simpler then you can imagine, just follow the few
                  step
                </p>
              </div>
              <div className="mt-[24px]  grid grid-cols-4 sm:grid-cols-1 justify-between items-center gap-x-[12px] sm:gap-y-[2px] ">
                {quickStep.map((item, index) => (
                  <div
                    key={item.title}
                    className=" flex items-center gap-x-[12px] "
                  >
                    <div className=" sm:flex sm:gap-x-[8px]">
                      <div className=" sm:flex sm:flex-col sm:items-center sm:gap-y-[9px]">
                        {item.img}
                        <div className="sm:block hidden">
                          {index < quickStep.length - 1 && verticalArrow}
                        </div>
                      </div>

                      <div>
                        <p className="mt-[8px] mb-[4px] sm:mt-0 text-white font-semibold text-[16px] leading-[24px]">
                          {item.title}
                        </p>
                        <p className=" text-white/50 font-normal text-[14px] leading-[20px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className=" sm:hidden">
                      {index < quickStep.length - 1 && arrow}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" text-center h-[44px] sm:h-[64px] sm:px-[19px] flex items-center justify-center bg-[#3E88F7] ">
              <p className=" font-normal text-[14px] leading-[20px] text-white ">
                Engage with the Telegram Community for your pool and stay
                connected.
              </p>
            </div>
          </div>
        </article>
        <article className="mt-[16px]">
          <div className=" bg-[#3E88F7]/20 rounded-[14px] shadow-[#4A3AFF30] overflow-hidden">
            <div className="px-[84px] py-[42px] sm:py-[24px] sm:px-[16px]">
              <div>
                <p className=" font-semibold text-[20px] leading-[32px] text-white">
                  How to Participate:
                </p>
                <p className=" font-normal text-[16px] leading-[20px] text-white/50">
                  Just a quick learning, just follow the few step
                </p>
              </div>
              <div className="mt-[24px]  grid grid-cols-4 sm:grid-cols-1 justify-between items-center gap-x-[12px] sm:gap-y-[2px] ">
                {howToParticipate.map((item, index) => (
                  <div
                    key={item.title}
                    className=" flex items-center gap-x-[12px]"
                  >
                    <div className=" sm:flex sm:gap-x-[8px]">
                      <div className=" sm:flex sm:flex-col sm:items-center sm:gap-y-[9px]">
                        {item.img}
                        <div className="sm:block hidden">
                          {index < quickStep.length - 1 && verticalArrow}
                        </div>
                      </div>

                      <div>
                        <p className="mt-[8px] mb-[4px] sm:mt-0 text-white font-semibold text-[16px] leading-[24px]">
                          {item.title}
                        </p>
                        <p className=" text-white/50 font-normal text-[14px] leading-[20px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className=" sm:hidden">
                      {index < quickStep.length - 1 && arrow}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" text-center h-[44px] sm:h-[64px] flex items-center justify-center bg-[#EE4D37] ">
              <p className=" font-normal text-[14px] leading-[20px] text-white">
                Non-winners retain their staked amount and can participate in
                future draws.
              </p>
            </div>
          </div>
        </article>
      </section>
      <div className="mt-[160px] sm:mt-[40px]">
        <Footer />
      </div>
    </section>
  );
};

const arrow = (
  <svg
    width="40"
    height="6"
    viewBox="0 0 40 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M40 3L35 0.113247L35 5.88675L40 3ZM2.18557e-08 3.5L1 3.5L1 2.5L-2.18557e-08 2.5L2.18557e-08 3.5ZM3 3.5L5 3.5L5 2.5L3 2.5L3 3.5ZM7 3.5L9 3.5L9 2.5L7 2.5L7 3.5ZM11 3.5L13 3.5L13 2.5L11 2.5L11 3.5ZM15 3.5L17 3.5L17 2.5L15 2.5L15 3.5ZM19 3.5L21 3.5L21 2.5L19 2.5L19 3.5ZM23 3.5L25 3.5L25 2.5L23 2.5L23 3.5ZM27 3.5L29 3.5L29 2.5L27 2.5L27 3.5ZM31 3.5L33 3.5L33 2.5L31 2.5L31 3.5ZM35 3.5L37 3.5L37 2.5L35 2.5L35 3.5Z"
      fill="#FDFCFF"
    />
  </svg>
);

const verticalArrow = (
  <svg
    width="6"
    height="38"
    viewBox="0 0 6 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M3 38L5.88675 33L0.11325 33L3 38ZM2.5 2.18557e-08L2.5 0.95L3.5 0.95L3.5 -2.18557e-08L2.5 2.18557e-08ZM2.5 2.85L2.5 4.75L3.5 4.75L3.5 2.85L2.5 2.85ZM2.5 6.65L2.5 8.55L3.5 8.55L3.5 6.65L2.5 6.65ZM2.5 10.45L2.5 12.35L3.5 12.35L3.5 10.45L2.5 10.45ZM2.5 14.25L2.5 16.15L3.5 16.15L3.5 14.25L2.5 14.25ZM2.5 18.05L2.5 19.95L3.5 19.95L3.5 18.05L2.5 18.05ZM2.5 21.85L2.5 23.75L3.5 23.75L3.5 21.85L2.5 21.85ZM2.5 25.65L2.5 27.55L3.5 27.55L3.5 25.65L2.5 25.65ZM2.5 29.45L2.5 31.35L3.5 31.35L3.5 29.45L2.5 29.45ZM2.5 33.25L2.5 35.15L3.5 35.15L3.5 33.25L2.5 33.25Z"
      fill="#FDFCFF"
    />
  </svg>
);
