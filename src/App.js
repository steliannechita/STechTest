import React, { useState, useEffect } from "react";
import { executeFetch } from "./api/index";
import { Header, Footer, Loading, ErrorMsg, MainWrap } from "./components";
import {apiResponse} from './stub/apiResponseObject'
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [fetchFromApi, setFetchFromApi] = useState(null);

  console.log(data);
  const handleRefreshClick = () => {
    setFetchFromApi((prev) => !prev);
  };
  const onFetchSuccess = (payload) => {
    setData(payload);
    setError(null);
  };
  const onFetchFailure = () => {
    setData(apiResponse);
    // setError("Fetch failed - please refresh your browser");
  };

  useEffect(() => {
    executeFetch(onFetchSuccess, onFetchFailure);
  }, [fetchFromApi]);

  if (!data && !error) return <Loading />;
  if (error) return <ErrorMsg text={error} />;
  return (
    <>
      <Header data={data} />
      <MainWrap data={data} handleRefreshClick={handleRefreshClick} />
      <Footer />
    </>
  );
}

export default App;
