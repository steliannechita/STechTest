import React from "react";
import { SectionHeader, Wrapper } from "../styles/styles";
import { GamesWrapper } from "../styles/mainwrap/games";

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
