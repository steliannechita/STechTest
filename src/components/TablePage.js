import React from "react";
import styled from "styled-components";
import RefreshButton from "../assets/images/refresh.svg";
import { SectionHeader } from "./styles";

const MainContainer = styled.div`
  max-width: 600px;
`;
const PrizeListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 10px 0px;

  img {
    &:hover {
      cursor: pointer;
      -webkit-animation-name: spin;
      -webkit-animation-duration: 4000ms;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;

      -moz-animation-name: spin;
      -moz-animation-duration: 4000ms;
      -moz-animation-iteration-count: infinite;
      -moz-animation-timing-function: linear;

      -ms-animation-name: spin;
      -ms-animation-duration: 4000ms;
      -ms-animation-iteration-count: infinite;
      -ms-animation-timing-function: linear;

      animation-name: spin;
      animation-duration: 4000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;

      @-ms-keyframes spin {
        from {
          -ms-transform: rotate(0deg);
        }
        to {
          -ms-transform: rotate(360deg);
        }
      }
      @-moz-keyframes spin {
        from {
          -moz-transform: rotate(0deg);
        }
        to {
          -moz-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes spin {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
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

const TablePage = ({ prizeList, handleRefreshClick }) => {
  return (
    <MainContainer>
      <PrizeListHeader>
        <SectionHeader>Prize List</SectionHeader>
        <img
          onClick={handleRefreshClick}
          src={RefreshButton}
          alt="refresh button"
        />
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
