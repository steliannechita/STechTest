import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { executeFetch } from "./api/index";
import { Header, Footer, Loading, ErrorMsg, MainWrap } from "./components";
import { GlobalStyle } from "./styles/styles";
// import { apiResponse } from "./stub/apiResponseObject";

const AppContainer = styled.div`
  max-width: 740px;
  min-width: 315px;
  @media screen and (min-width: 740px) {
    margin: 50px auto;
  }
`;
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [prizeListRefresh, setPrizeListRefresh] = useState(false);

  const handleRefreshClick = () => {
    setPrizeListRefresh((prev) => !prev);
  };
  const onFetchSuccess = (payload) => {
    setData(payload);
    setError(null);
  };
  const onFetchFailure = () => {
    setData(null);
    setError("Fetch failed - please refresh your browser");
  };

  useEffect(() => {
    executeFetch(onFetchSuccess, onFetchFailure);
  }, [prizeListRefresh]);

  if (!data && !error) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMsg text={error} />;
  }
  return (
    <>
      <AppContainer>
        <Header data={data} />
        <MainWrap data={data} handleRefreshClick={handleRefreshClick} />
        <Footer />
      </AppContainer>
      <GlobalStyle />
    </>
  );
}

export default App;
