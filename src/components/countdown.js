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
`;

const Countdown = ({ timeleft }) => {
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
