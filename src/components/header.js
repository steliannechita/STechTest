import React from "react";
import { object } from "prop-types";
import CloseButton from "../assets/images/close.svg";
import UserIcon from "../assets/images/user.svg";
import CalendarIcon from "../assets/images/calendar.svg";
import { competitionStartDate } from "../constants/constants";
import { HeaderWrapper, InnerWrapper } from "../styles/header";
import { Countdown } from ".";

const Header = ({ data }) => (
  <HeaderWrapper backgroundImage={data.backgroundImage}>
    <InnerWrapper>
      <h1>{data.title}</h1>
      <img src={CloseButton} alt="close-button" />
    </InnerWrapper>
    <Countdown />
    <section>
      <InnerWrapper secondary>
        <p>PRIZE POOL</p>
        <h1>{data.prizePool}</h1>
      </InnerWrapper>
      <InnerWrapper secondary player>
        <p>PLAYER</p>
        <div>
          <img src={UserIcon} alt="user-icon" />
          <h1>{data.players}</h1>
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

Header.propTypes = {
  data: object,
};

Header.defaultProps = {
  data: {},
};

export default Header;
