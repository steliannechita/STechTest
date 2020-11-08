import React from "react";
import styled from "styled-components";
import { SectionHeader, Wrapper } from "../styles/styles";

const GamesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-height: 372px;
  overflow-y: overlay;
  justify-content: space-between;

  img {
    @media screen and (min-width: 740px) {
      max-width: 190px;
      height: 130px;
    }
    max-width: 160px;
    height: auto;
    margin-bottom: 14px;
    &:hover {
      box-sizing: border-box;
      border: 3px solid blueviolet;
      border-radius: 3px;
      cursor: pointer;
    }
  }
`;

const Games = ({ games }) => (
  <Wrapper>
    <SectionHeader>Include Games</SectionHeader>
    <GamesWrapper>
      {games.map((game, index) => {
        return <img key={game.title + index} src={game.src} alt={game.title} />;
      })}
    </GamesWrapper>
  </Wrapper>
);

export default Games;
