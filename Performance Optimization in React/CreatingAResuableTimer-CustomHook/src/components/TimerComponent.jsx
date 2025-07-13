import { useState } from "react";
import useTimer from "../hooks/useTimer";


function TimerComponent(){
    const [time,toggle,InputTime,reset,stop]=useTimer(false)
    console.log(time,toggle,InputTime)
    return(
        <>
        <div>
            {/* {time &&  } */}
            <h1>Timer Component</h1>
            <h1>Timer :{InputTime}</h1>
            <button onClick={toggle}>Start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={stop}>Stop</button>
          
        </div>
        
        </>
    )
}
export default TimerComponent;