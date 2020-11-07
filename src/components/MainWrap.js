import React from "react";
import { PrizeList, Games, TermsAndConditions } from "../components";

const MainWrap = ({ data }) => {
  const { prizeList, games, description } = data;
  return (
    <div>
      <PrizeList prizeList={prizeList} description={description} />
      <Games games={games} />
      <TermsAndConditions />
    </div>
  );
};

export default MainWrap;
