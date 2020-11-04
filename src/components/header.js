import React from "react";
import styled from "styled-components";
import Countdown from "./countdown";
import close from "../assets/images/close.svg";

const Wrapper = styled.div`
  margin-top: 120px;
  width: 100%;
  height: 410px;
  object-fit: contain;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: 410px 375px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;
const InnerWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  width: 245px;
  height: 70px;
  font-size: 34px;
  font-weight: 500;
  font-family: "Barlow Condensed";
  font-style: normal;
  line-height: 1.03;
  letter-spacing: -0.77px;
  color: #ffffff;
  margin: 20px 0px 0px 20px;
`;
const CloseButton = styled.img`
  width: 34px;
  height: 34px;
  object-fit: contain;
  margin: 20px 24px 0px 0px;
`;

const Header = ({ data }) => (
  <div>
    <Wrapper backgroundImage={data?.backgroundImage}>
      <InnerWrapper>
        <Title>{data?.title}</Title>
        <CloseButton src={close} />
      </InnerWrapper>
      <Countdown />
    </Wrapper>
  </div>
);

export default Header;
