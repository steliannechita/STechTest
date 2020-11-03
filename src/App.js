import React,{useState,useEffect} from "react";
import "./App.css";
import {fetchedResult} from './api/index'
const apiUrl = 'https://run.mocky.io/v3/e60fb51f-02b1-4ede-bd82-6c0481b5edda';

function App() {
	const [data, setData] = useState(null)
    useEffect(()=>{
        fetchedResult().then(res=>setData(res))
    },[])
    console.log(data);
    return (
        <div style = {{backgroundImage: `url(${data?.backgroundImage})`,backgroundSize:'410px 375px',height : '410px',width:'auto',backgroundRepeat: 'no-repeat'}}>
                <h1 style = {{color:'white'}}>{data?.title}</h1>
        </div>
    )
	
	
}

export default App;
