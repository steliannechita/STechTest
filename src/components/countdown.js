import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
`;

const Rectangle = styled.div`
  color: white;
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: solid 2px #ffffff;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  font-family: "Barlow Condensed";
  font-weight: 600;
  font-size: 18px;
`;
const StartsAt = styled.div`
  display: flex;
  align-self: center;
  width: 66px;
  height: 30px;
  font-family: "Barlow Condensed";
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  line-height: 30px;
  letter-spacing: normal;
  color: #ffffff;
  margin-left: 20px;
`;
const Param = styled.div`
  height: 30px;
  font-family: "Barlow Condensed";
  font-size: 22px;
  font-weight: 500;
  font-stretch: condensed;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: #ffffff;
  display: flex;
  align-self: center;
`;

const Countdown = () => {
  const countdownDate = new Date(
    new Date().getTime() + 7 * 24 * 60 * 60 * 1000
  ).getTime();
  const [timeleft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    let dif = countdownDate - new Date().getTime();
    if (dif > 0) {
      const timeLeftFormatted = {
        days: Math.floor(dif / (1000 * 60 * 60 * 24)),
        hours: Math.floor((dif / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((dif / 1000 / 60) % 60),
        seconds: Math.floor((dif / 1000) % 60),
      };
      return timeLeftFormatted;
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log(timeleft);
  return (
    <Container>
      <StartsAt>Starts at</StartsAt>
      <Rectangle>{timeleft.days}</Rectangle>
      <Param>d</Param>
      <Rectangle>{timeleft.hours}</Rectangle>
      <Param>h</Param>
      <Rectangle>{timeleft.minutes}</Rectangle>
      <Param>m</Param>
      <Rectangle>{timeleft.seconds}</Rectangle>
      <Param>s</Param>
    </Container>
  );
};

export default Countdown;
