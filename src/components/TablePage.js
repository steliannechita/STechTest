import React from "react";
import styled, { css } from "styled-components";
import RefreshButton from "../assets/images/refresh.svg";

const MainContainer = styled.div`
  max-width: 600px;
`;
const PrizeListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 10px 0px;
  h1 {
    height: 26px;
    font-size: 24px;
    line-height: 1.08;
    color: #091870;
  }
`;
const TabbleWrapper = styled.div`
  font-family: "Barlow condensed";
  font-weight: 600;
  max-height: 198px;
  overflow-y: scroll;
  margin-right: 20px;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: yellow;
    background-color: #f9cb11;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  table {
    padding: 0px 20px;
    width: 100%;

    tbody {
      hr {
        color: white;
      }
      width: 100%;
      tr {
        padding-left: 5px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;
        padding: 5px 0px;
        td {
          display: flex;
          width: 66px;
          justify-content: space-between;
          &.value {
            justify-content: flex-end;
          }
        }
      }
    }
  }
`;

const TablePage = ({ prizeList }) => {
  return (
    <MainContainer>
      <PrizeListHeader>
        <h1>Prize List</h1>
        <img src={RefreshButton} alt="refresh button" />
      </PrizeListHeader>
      <TabbleWrapper>
        <table>
          <tbody>
            {prizeList.map(({ total, title }, index) => (
              <tr key={total}>
                <td>
                  <span>{index + 1}</span>
                  <span>{title}</span>
                </td>
                <td className="value">
                  <span>{total}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TabbleWrapper>
    </MainContainer>
  );
};

export default TablePage;
