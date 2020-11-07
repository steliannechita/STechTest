import React from "react";
import { TablePage } from "../components";
import styled, { css } from "styled-components";

const DescriptionSpan = styled.div`
  max-width: 575px;
  padding: 20px;
  span {
    font-family: "Roboto condensed";
    font-size: 16px;

    line-height: 1.38;

    color: #000000;
  }
`;
const PrizeList = ({ prizeList, description }) => (
  <div>
    <TablePage prizeList={prizeList} />
    <DescriptionSpan>
      <span>{description}</span>
    </DescriptionSpan>
  </div>
);

export default PrizeList;
