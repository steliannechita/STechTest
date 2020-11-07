import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
  > span {
    height: 30px;
    font-family: "Barlow Condensed";
    font-size: 22px;
    font-weight: 400;
    line-height: 1.4;
    color: #ffffff;
    display: flex;
    align-self: center;
    &.start-at {
      font-family: "Barlow Condensed";
      font-size: 22px;
      font-weight: 400;
      color: #ffffff;
      margin-left: 20px;
    }
  }
`;

const Rectangle = styled.div`
  color: #ffffff;
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: solid 2px #ffffff;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  font-family: "Barlow Condensed";
  font-weight: 400;
  font-size: 18px;
  box-sizing: border-box;
`;

const Countdown = ({ countdownDate, msInADay }) => {
  const [timeleft, setTimeLeft] = useState({});
  const calculateTimeLeft = () => {
    let diff = countdownDate - new Date().getTime();
    if (diff > 0) {
      const timeLeftFormatted = {
        days: Math.floor(diff / msInADay),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
      return timeLeftFormatted;
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <span className="start-at">Starts at</span>
      <Rectangle>{timeleft.days}</Rectangle>
      <span>d</span>
      <Rectangle>{timeleft.hours}</Rectangle>
      <span>h</span>
      <Rectangle>{timeleft.minutes}</Rectangle>
      <span>m</span>
      <Rectangle>{timeleft.seconds}</Rectangle>
      <span>s</span>
    </Container>
  );
};

export default Countdown;
