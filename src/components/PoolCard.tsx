import styled from "styled-components";
import RectangleImage from "../images/rectangle.svg";
import BarImage from "../images/bar_img.svg";
import Timer from "./Timer";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Tooltip } from "antd";
import { usePageContext } from "../hooks/usePageContext";
import PoolsImage from "../images/pools_image.svg";
import { useDeposit } from "../hooks/useDeposit";

const PoolContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

const MainBody = styled.div`
  width: 98%;
  max-width: 420px;
  height: fit-content;
  background: #232a34;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
`;

const TopContent = styled.div`
  padding: 18px 12px;
  display: flex;
  gap: 10px;
`;

const NameAndTag = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const PoolName = styled.p`
  margin: 0;
  font-size: 18px;
`;
const PoolTag = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  background: linear-gradient(92.69deg, #648bf4 0%, #d2597a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  border-radius: 5px;
  text-align: center;
`;

const MiddleContent = styled.div<{ bgColor: string }>`
  height: 80px;
  background: linear-gradient(92.69deg, #648bf4 0%, #d2597a 100%);
  padding: 16px 20px;
  display: flex;
`;

const MiddleLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
`;

const Prize = styled.p`
  margin: 0;
  color: white;
  font-size: 12px;
`;

const PrizeAmount = styled.p`
  margin: 0;
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const LowerContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ContentTitle = styled.p`
  color: #919499;
  margin: 0;
  font-size: 14px;
`;
const ContentValue = styled.p`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const MainText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const SubText = styled.span`
  font-size: 12px;
  align-self: flex-end;
`;

const DepositButton = styled.button`
  border: none;
  margin: none;
  padding: 16px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  margin: 10px 20px 15px;
`;

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface PoolCardProps {
  initialTime: TimeLeft;
  middleContentBgColor: string;
  poolName: string;
  poolTag: string;
  prizeAmount: string;
}

const PoolCard: React.FC<PoolCardProps> = ({
  initialTime,
  middleContentBgColor,
  poolName,
  poolTag,
  prizeAmount,
}) => {
  const { setPageNumber } = usePageContext();
  const { makeDeposit } = useDeposit();

  const handleDepositClick = () => {
    makeDeposit(3354);
    // setPageNumber(1);
  };
  return (
    <PoolContainer>
      <MainBody>
        <TopContent>
          <div className="bg-white flex items-center justify-center w-[60px] rounded-lg">
            <img src={PoolsImage} alt="Rectangle" />
          </div>
          <NameAndTag>
            <PoolName className="text-white">{poolName}</PoolName>
            <div className="bg-[#FFFFFF1A] max-w-max text-center  px-[10px] py-[4px] rounded-[4px]">
              <PoolTag>{poolTag}</PoolTag>
            </div>
          </NameAndTag>
        </TopContent>
        <MiddleContent
          className="flex justify-between"
          bgColor={middleContentBgColor}
        >
          <MiddleLeftContent>
            <Prize className="font-bold">🏆 Prize up to</Prize>
            <PrizeAmount>${prizeAmount}</PrizeAmount>
          </MiddleLeftContent>
          <div className="flex flex-col justify-center items-end">
            <p className="text-xs leading-normal font-medium text-white">
              will be awarded
            </p>
            <Timer initialTime={initialTime} />
          </div>
        </MiddleContent>
        <LowerContent>
          <Contents>
            <ContentTitle className="flex justify-center items-center gap-2 ">
              Win Chance{" "}
              <Tooltip
                placement="top"
                title="A vault's relative win chance compared to other vaults"
                color="white"
              >
                <IoIosInformationCircleOutline className="text-[#919499] text-[18px]" />
              </Tooltip>
            </ContentTitle>
            <ContentValue>
              <img src={BarImage} alt="Bar" />
            </ContentValue>
          </Contents>
          <Contents className="text-white">
            <ContentTitle>Total deposit till now</ContentTitle>
            <ContentValue>
              <MainText>$69.6 Billion</MainText>
              <SubText>226,064 USDC</SubText>
            </ContentValue>
          </Contents>
        </LowerContent>
        <DepositButton
          className="bg-[#3E88F7] text-white font-bold text-[15px] leading-normal"
          onClick={handleDepositClick}
        >
          Deposit
        </DepositButton>
      </MainBody>
    </PoolContainer>
  );
};

export default PoolCard;
