import React from "react";
import styled from "styled-components";
import { SectionHeader, Wrapper } from "./styles";

const GamesWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  max-height: 372px;
  overflow-y: overlay;
  justify-content: space-between;

  img {
    width: 160px;
    height: 110px;
    margin-bottom: 14px;
    &:hover {
      box-sizing: border-box;
      border: 3px solid blueviolet;
      border-radius: 3px;
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
