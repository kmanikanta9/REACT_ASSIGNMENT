import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function TimerComponent(){
    const [time,setTime]=useState(0)
    const [run,setRun]=useState(false);


    function handleStart(){
        setRun(!run)
    }
    useEffect(()=>{
        if(run){
            let t=setInterval(()=>{
                setTime(prev=>prev+1)
            },1000)
            return()=>{
                clearInterval(t)
            }
        }
    })
    function handleReset(){
        setTime(0)
        setRun(false)
    }

    return(
        <div>
            <h1>Timer:{time}</h1>
            <button onClick={handleStart}>Start Timer</button>
            <button onClick={handleStart}>Stop Timer</button>
            <button onClick={handleReset}>Reset Timer</button>
        </div>
    )
}

export default TimerComponent;