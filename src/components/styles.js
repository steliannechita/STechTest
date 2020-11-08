import styled from "styled-components";

export const SectionHeader = styled.h1`
  height: 26px;
  font-size: 24px;
  line-height: 1.08;
  color: #091870;
`;

export const Wrapper = styled.div`
  margin: 20px;
  > ul {
    padding-left: 20px;
    font-size: 14px;
    line-height: 22px;
    font-family: "Roboto Regular";
  }
`;

export const LoaderAndErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${window.visualViewport.height}px;

  > img {
    height: 22px;
    margin: 5px;
  }
`;
