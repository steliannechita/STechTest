import React from "react";
import { TablePage } from "../components";
import { Wrapper } from "../styles/styles";
import { DescriptionSpan } from "../styles/mainwrap/prizeList";

const PrizeList = ({ prizeList, description, handleRefreshClick }) => (
  <Wrapper>
    <TablePage handleRefreshClick={handleRefreshClick} prizeList={prizeList} />
    <DescriptionSpan>
      <span>{description}</span>
    </DescriptionSpan>
  </Wrapper>
);

export default PrizeList;
