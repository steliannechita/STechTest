import React, { useState, useEffect } from "react";
import { executeFetch } from "./api/index";
import { Header, Footer, Loading, ErrorMsg, MainWrap } from "./components";
import { errorMessage } from "./constants/constants";
import { GlobalStyle, AppContainer } from "./styles/styles";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const onFetchSuccess = (payload) => {
    setData(payload);
    setError(null);
  };

  const onFetchFailure = () => {
    setData(null);
    setError(errorMessage);
  };

  const fetchData = () => {
    executeFetch(onFetchSuccess, onFetchFailure);
  };

  useEffect(fetchData, []);

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
        <MainWrap data={data} handleRefreshClick={fetchData} />
        <Footer />
      </AppContainer>
      <GlobalStyle />
    </>
  );
}

export default App;
