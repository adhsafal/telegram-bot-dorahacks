import styled from "styled-components";
import RectangleImage from "../images/rectangle.svg";
import BarImage from "../images/bar_img.svg";

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
  margin: 0;
  font-size: 13px;
  color: #f7d64b;
  padding: 8px;
  background: rgba(247, 214, 75, 0.1);
  border-radius: 5px;
`;

const MiddleContent = styled.div`
  height: 80px;
  background: #f7d64b;
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
  color: black;
  font-size: 14px;
`;

const PrizeAmount = styled.p`
  margin: 0;
  color: black;
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

const PoolCard = () => {
  return (
    <PoolContainer>
      <MainBody>
        <TopContent>
          <img src={RectangleImage} alt="" />
          <NameAndTag>
            <PoolName>VIP Pool</PoolName>
            <PoolTag>Elite Opportunities</PoolTag>
          </NameAndTag>
        </TopContent>
        <MiddleContent>
          <MiddleLeftContent>
            <Prize>🏆 Prize upto</Prize>
            <PrizeAmount>$5,000</PrizeAmount>
          </MiddleLeftContent>
        </MiddleContent>
        <LowerContent>
          <Contents>
            <ContentTitle>Win Chance</ContentTitle>
            <ContentValue>
              <img src={BarImage} alt="" />
            </ContentValue>
          </Contents>
          <Contents>
            <ContentTitle>Total deposit till now</ContentTitle>
            <ContentValue>
              <MainText>$69.6 Billon</MainText>
              <SubText>226,064 USDC</SubText>
            </ContentValue>
          </Contents>
        </LowerContent>
        <DepositButton>Deposit</DepositButton>
      </MainBody>
    </PoolContainer>
  );
};

export default PoolCard;
