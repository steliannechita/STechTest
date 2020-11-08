import React, { useState, useEffect, useCallback } from "react";
import { number } from "prop-types";
import { Rectangle, CountdownContainer } from "../styles/header";

const Countdown = ({ countdownDate, msInADay }) => {
  const [timeleft, setTimeLeft] = useState({});
  const calculateTimeLeft = useCallback(() => {
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
  }, [countdownDate, msInADay]);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  return (
    <CountdownContainer>
      <p>Starts</p>
      <Rectangle>{timeleft.days}</Rectangle>
      <span>d</span>
      <Rectangle>{timeleft.hours}</Rectangle>
      <span>h</span>
      <Rectangle>{timeleft.minutes}</Rectangle>
      <span>m</span>
      <Rectangle>{timeleft.seconds}</Rectangle>
      <span>s</span>
    </CountdownContainer>
  );
};

Countdown.propTypes = {
  countdownDate: number,
  msInADay: number,
};

export default Countdown;
