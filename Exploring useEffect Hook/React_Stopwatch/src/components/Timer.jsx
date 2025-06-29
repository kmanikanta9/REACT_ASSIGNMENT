import React, { useEffect, useState } from "react";


const Timer=()=>{
    const [timer,setTimer]=useState(0);
    const [running,setRunning]=useState(false);
    function handleStart(){
        setRunning(!running)
    }
    useEffect(()=>{
        if(running){

            let time=setInterval(()=>{
                setTimer(prev=>prev+1)
            },1000)
            
            return()=>{
                clearInterval(time)
            }
        }
    },[running])
    if(timer==10){
        alert("10 Seconds")
    }
    function handleReset(){
        setTimer(0)
        setRunning(!running)
    }
    return(
        <>
            <div>
                <h1>Timer:{timer}</h1>
                <button onClick={handleStart}>Start Timer</button>
                <button onClick={handleStart}>Stop Timer</button>
                <button onClick={handleReset}>Reset Time</button>
            </div>
        </>
    )
}

export default Timer;