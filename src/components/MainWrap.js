import React from "react";
import { PrizeList, Games, TermsAndConditions } from "../components";

const MainWrap = ({ data, handleRefreshClick }) => {
  const { prizeList, games, description } = data;
  return (
    <div>
      <PrizeList
        prizeList={prizeList}
        description={description}
        handleRefreshClick={handleRefreshClick}
      />
      <Games games={games} />
      <TermsAndConditions />
    </div>
  );
};

export default MainWrap;
