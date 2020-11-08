import React from "react";
import RefreshButton from "../assets/images/refresh.svg";
import {PrizeListHeader,TabbleWrapper} from '../styles/mainwrap/prizeList'
import { SectionHeader } from "../styles/styles";

const TablePage = ({ prizeList, handleRefreshClick }) => {
  return (
    <div>
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
    </div>
  );
};

export default TablePage;
