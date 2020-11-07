import React, { useState, useEffect } from "react";
import { executeFetch } from "./api/index";
import { Header, Footer, Loading, ErrorMsg, MainWrap } from "./components";



function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  console.log(data);
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
  }, []);

  

  if (!data && !error) return <Loading />;
  if (error) return <ErrorMsg text={error} />;
  return (
    <>
      <Header data={data}  />
      <MainWrap data={data}/>
      <Footer />
    </>
  );
}

export default App;
