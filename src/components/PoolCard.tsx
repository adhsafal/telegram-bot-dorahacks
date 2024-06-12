import styled from "styled-components";
import RectangleImage from "../images/rectangle.svg";
import BarImage from "../images/bar_img.svg";
import Timer from "./Timer";
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
const PoolTag = styled.p<{ tagBgColor: string; tagColor: string }>`
  margin: 0;
  font-size: 13px;
  color: ${(props) => props.tagColor};
  background: ${(props) => props.tagBgColor};
  border-radius: 5px;
`;

const MiddleContent = styled.div<{ bgColor: string }>`
  height: 80px;
  background: ${(props) => props.bgColor};
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
  color: #181f27;
  font-size: 12px;
`;

const PrizeAmount = styled.p`
  margin: 0;
  color: #181f27;
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
  tagColor: string;
  tagBgColor: string;
}

const PoolCard: React.FC<PoolCardProps> = ({
  initialTime,
  middleContentBgColor,
  poolName,
  poolTag,
  prizeAmount,
  tagColor,
  tagBgColor,
}) => {
  return (
    <PoolContainer>
      <MainBody>
        <TopContent>
          <img src={RectangleImage} alt="Rectangle" />
          <NameAndTag>
            <PoolName className="text-white">{poolName}</PoolName>
            <PoolTag
              tagColor={tagColor}
              tagBgColor={tagBgColor}
              className="text-center max-w-max px-[10px] py-[4px]"
            >
              {poolTag}
            </PoolTag>
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
            <p className="text-xs leading-normal font-medium text-[#181F27]">
              will be awarded
            </p>
            <Timer initialTime={initialTime} />
          </div>
        </MiddleContent>
        <LowerContent>
          <Contents>
            <ContentTitle>Win Chance</ContentTitle>
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
        <DepositButton className="bg-white text-black">Deposit</DepositButton>
      </MainBody>
    </PoolContainer>
  );
};

export default PoolCard;
