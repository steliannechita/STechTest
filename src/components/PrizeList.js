import React from "react";
import { TablePage } from "../components";
import styled from "styled-components";
import { Wrapper } from "../styles/styles";

const DescriptionSpan = styled.div`
  margin-top: 30px;
  span {
    font-family: "Roboto condensed";
    font-size: 16px;
    line-height: 1.38;
    color: #000000;
  }
  @media screen and (min-width: 740px) {
    margin-top: 45px;
  }
`;
const PrizeList = ({ prizeList, description, handleRefreshClick }) => (
  <Wrapper>
    <TablePage handleRefreshClick={handleRefreshClick} prizeList={prizeList} />
    <DescriptionSpan>
      <span>{description}</span>
    </DescriptionSpan>
  </Wrapper>
);

export default PrizeList;
