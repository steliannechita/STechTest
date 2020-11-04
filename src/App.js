import React, { useState, useEffect } from "react";
import { executeFetch } from "./api/index";
import Header from "./components/header";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    executeFetch().then((res) => setData(res));
  }, []);
  console.log(data);
  return (
    <Header data={data} />
    //  <MainWrap/>
    // <Footer/>
    //  <div style = {{backgroundImage: `url(${data?.backgroundImage})`,backgroundSize:'410px 375px',height : '410px',width:'auto',backgroundRepeat: 'no-repeat'}}>
    //     <h1 style = {{color:'white'}}>{data?.title}</h1>
    // </div>
  );
}

export default App;
