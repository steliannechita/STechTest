import React from "react";
import { func, object } from "prop-types";
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

MainWrap.propTypes = {
  data: object,
  handleRefreshClick: func,
};

MainWrap.defaultProps = {
  data: {},
  handleRefreshClick: (r) => r,
};

export default MainWrap;
