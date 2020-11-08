import styled from "styled-components";

export const GamesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-height: 372px;
  overflow-y: overlay;
  justify-content: space-between;

  img {
    max-width: 160px;
    height: auto;
    margin-bottom: 14px;
    &:hover {
      box-sizing: border-box;
      opacity: 70%;
      border-radius: 3px;
      cursor: pointer;
    }

    @media only screen and (min-width: 280px) {
      max-width: 135px;
    }
    @media only screen and (min-width: 361px) {
      max-width: 160px;
    }
    @media only screen and (min-width: 576px) {
      max-width: 175px;
    }
    @media screen and (min-width: 740px) {
      max-width: 190px;
    }
  }
`;
