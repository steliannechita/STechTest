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
  /* mobile-->margin-top: 120px; */
  padding: 20px 20px 30px 20px; //desktop padding bottom 40px
  @media screen and (min-width: 740px) {
    padding: 49px 70px 40px 70px;
  }
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  section {
    display: flex;
    margin-top: 80px;
  }
  button {
    min-height: 44px;
    background-color: #f9cb11;
    font-family: "Barlow Condensed";
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1.88px;
    color: #0a0052;
    border-radius: 3px;
    &:hover {
      border: 2px solid goldenrod;
      cursor: pointer;
    }
    @media screen and (min-width: 740px) {
      max-width: 300px;
    }
  }
`;

const InnerWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 20px;
  h1 {
    font-size: 34px;
    font-weight: 400;
    font-family: "Barlow Condensed";
    line-height: 1.03;
    letter-spacing: -0.77px;
    color: #ffffff;
    margin-top: 0px;
    @media screen and (min-width: 740px) {
      font-size: 48px;
      font-weight: 600;
    }
  }
  > img {
    width: 34px;
    height: 34px;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      width: 103px;
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: flex-start;
      margin-bottom: 0px;
      h1 {
        font-family: "Barlow condensed";
        font-size: 26px;
        font-weight: 500;
        color: #ffffff;
        margin: 3px 0px 0px 0px;
      }
      p {
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
      margin-left: 32px;
      div {
        margin-top: 3px;
      }
    `}
  ${({ tertiary }) =>
    tertiary &&
    css`
      justify-content: flex-start;
      align-items: center;
      margin: 22px 0px 31px 0px;
      img {
        width: 18px;
        height: 20px;
        margin-right: 12px;
      }
      p {
        font-family: "Barlow condensed";
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.4px;
        color: #ffffff;
      }
    `}
`;

const Header = ({ data }) => (
  <HeaderWrapper backgroundImage={data.backgroundImage}>
    <InnerWrapper>
      <h1>{data.title}</h1>
      <img src={CloseButton} alt="close-button" />
    </InnerWrapper>
    <Countdown countdownDate={countdownDate} msInADay={msInADay} />
    <section>
      <InnerWrapper secondary>
        <p>PRIZE POOL</p>
        <h1>{data.prizePool}</h1>
      </InnerWrapper>
      <InnerWrapper secondary player>
        <p>PLAYER</p>
        <div>
          <img src={UserIcon} alt="user-icon" />
          <h1>{data.players}</h1> {/*shall i use h1? */}
        </div>
      </InnerWrapper>
    </section>
    <InnerWrapper tertiary>
      <img src={CalendarIcon} alt="close-button" />
      <p>Starts on {competitionStartDate}</p>
    </InnerWrapper>
    <button>JOIN</button>
  </HeaderWrapper>
);

export default Header;
