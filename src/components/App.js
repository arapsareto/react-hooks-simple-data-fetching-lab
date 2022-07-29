// create your App component here
import React from "react";
import { useState, useEffect } from "react";

function App(){

    const[respData, setRespData] = useState("")
    const[apiLoading, setApiLoading] = useState(true)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp)=>resp.json())
        .then((data)=>{
            setRespData(data.message)
            setApiLoading(false)
        })
    },[])

    if(apiLoading) return <p>Loading....</p>

return(
    <div>
        <img src={respData} alt="random dog"></img>
    </div>
)
}
export default App;   