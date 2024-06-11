import React from "react";
import FullLogo from "../images/full_logo.svg";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0px 30px;
`;

const Line = styled.div`
  height: 0.8px;
  background: #ffffff;
  width: 100%;
  opacity: 0.4;
  margin: 10px 0px 20px;
`;

const SmallText = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 20px 0px 12px;
`;

const LargeText = styled.p`
  color: #50b7fc;
  font-size: 30px;
  font-weight: 700;
  margin: 0;
`;

const LogoAndInfo = () => {
  return (
    <Container>
      <img src={FullLogo} alt="" />
      <Line />
      <SmallText>Deposit tokens, win prizes</SmallText>
      <LargeText>Withdraw anytime, no loss</LargeText>
    </Container>
  );
};

export default LogoAndInfo;
