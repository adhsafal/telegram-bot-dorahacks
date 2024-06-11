import styled from "styled-components";
import RectangleImage from "../images/rectangle.svg";

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
  height: 100px;
  background: #f7d64b;
`;

const LowerContent = styled.div`
  padding: 15px;
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
        <MiddleContent></MiddleContent>
        <LowerContent></LowerContent>
      </MainBody>
    </PoolContainer>
  );
};

export default PoolCard;
