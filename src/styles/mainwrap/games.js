import styled from "styled-components";

export const GamesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: overlay;
  justify-content: space-between;

  img {
    max-width: 42vw;
    margin-bottom: 14px;
    &:hover {
      box-sizing: border-box;
      opacity: 70%;
      border-radius: 3px;
      cursor: pointer;
    }
    @media screen and (min-width: 740px) {
      max-width: 190px;
    }
  }
`;
