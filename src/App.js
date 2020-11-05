import React, { useState, useEffect } from "react";
import { executeFetch } from "./api/index";
import {
  Header,
  Footer,
  Loading,
  ErrorMsg,
  TermsAndConditions,
} from "./components";

const msInAnHour = 1000 * 60 * 60;
const msInADay = msInAnHour * 24;

function App() {
  const countdownDate = new Date().getTime() + 7 * msInADay;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [timeleft, setTimeLeft] = useState({});

  const onFetchSuccess = (payload) => {
    setData(payload);
    setError(null);
  };
  const onFetchFailure = () => {
    setData(null);
    setError("Fetch failed - please refresh your browser");
  };

  const calculateTimeLeft = () => {
    let diff = countdownDate - new Date().getTime();
    if (diff > 0) {
      const timeLeftFormatted = {
        days: Math.floor(diff / msInADay),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
      console.log(timeLeftFormatted);
      return timeLeftFormatted;
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  useEffect(() => {
    executeFetch(onFetchSuccess, onFetchFailure);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!data && !error) return <Loading />;
  if (error) return <ErrorMsg text={error} />;
  return (
    <>
      <Header data={data} timeleft={timeleft} />
      <TermsAndConditions />
      <Footer />
    </>
    //  <MainWrap/>
    // <Footer/>
    //  <div style = {{backgroundImage: `url(${data?.backgroundImage})`,backgroundSize:'410px 375px',height : '410px',width:'auto',backgroundRepeat: 'no-repeat'}}>
    //     <h1 style = {{color:'white'}}>{data?.title}</h1>
    // </div>
  );
}

export default App;
