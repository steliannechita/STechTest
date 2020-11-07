import React from "react";
import styled, { css } from "styled-components";
import Countdown from "./Countdown";
import CloseButton from "../assets/images/close.svg";
import UserIcon from "../assets/images/user.svg";
import CalendarIcon from "../assets/images/calendar.svg";

const msInAnHour = 1000 * 60 * 60;
const msInADay = msInAnHour * 24;
const countdownDate = new Date().getTime() + 7 * msInADay;
const competitionStartDate = new Date(countdownDate).toUTCString();

const HeaderWrapper = styled.header`
  margin-top: 120px;
  width: 100%;
  max-width: 740px;
  height: 410px;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  section {
    display: flex;
    margin: 59px 0px 0px 0px;
  }
  button {
    width: auto;
    max-width: 334px;
    height: 42px;
    border-radius: 1px;
    background-color: #f9cb11;
    margin: 0 20px;
    font-family: "Barlow Condensed";
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1.88px;
    color: #0a0052;
    margin-bottom: 40px;
    &:hover {
      border: 1px solid blueviolet;
    }
  }
`;

const InnerWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin: 20px 0px 0px 20px;

  > h1 {
    font-size: 34px;
    font-weight: 400;
    font-family: "Barlow Condensed";
    line-height: 1.03;
    letter-spacing: -0.77px;
    color: #ffffff;
    margin-top: 0px;
  }
  > img {
    width: 34px;
    height: 34px;
    object-fit: contain;
    margin: 0px 24px 0px 0px;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      width: 103px;
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: flex-start;
      h1 {
        font-family: "Barlow condensed";
        font-size: 26px;
        font-weight: 500;
        color: #ffffff;
        margin: 3px 0px 0px 0px;
      }
      span {
        font-family: "Barlow condensed";
        font-size: 14px;
        font-weight: 500;
        color: #17dfe7;
      }
      div {
        display: flex;
        align-items: baseline;
        h1 {
          margin-top: 0px;
        }
        img {
          margin-right: 3px;
        }
      }
    `}
  ${({ secondary, player }) =>
    secondary &&
    player &&
    css`
      margin: 20px 0px 0px 32px;
    `}
  ${({ tertiary }) =>
    tertiary &&
    css`
      justify-content: flex-start;
      align-items: center;
      margin-top: 0px;
      img {
        width: 18px;
        height: 20px;
        margin-right: 12px;
      }
      h5 {
        font-family: "Barlow condensed";
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
      }
    `}
`;

const Header = ({ data }) => (
  <div>
    <HeaderWrapper backgroundImage={data.backgroundImage}>
      <InnerWrapper>
        <h1>{data.title}</h1>
        <img src={CloseButton} alt="close-button" />
      </InnerWrapper>
      <Countdown countdownDate={countdownDate} msInADay={msInADay} />
      <section>
        <InnerWrapper secondary>
          <span>PRIZE POOL</span>
          <h1>{data.prizePool}</h1>
        </InnerWrapper>
        <InnerWrapper secondary player>
          <span>PLAYER</span>
          <div>
            <img src={UserIcon} alt="user-icon" />
            <h1>{data.players}</h1> {/*shall i use h1? */}
          </div>
        </InnerWrapper>
      </section>
      <InnerWrapper tertiary>
        <img src={CalendarIcon} alt="close-button" />
        <h5>Starts on {competitionStartDate}</h5>
      </InnerWrapper>
      <button>JOIN</button>
    </HeaderWrapper>
  </div>
);

export default Header;
