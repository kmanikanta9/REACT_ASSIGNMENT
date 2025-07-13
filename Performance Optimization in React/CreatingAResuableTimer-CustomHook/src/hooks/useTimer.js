import { useEffect, useState } from "react"


function useTimer(initialValue=false){
    const [time,setTime]=useState(initialValue)
    const [InputTime,setInputTime]=useState(0)
    const toggle=()=>{setTime(prev=>!prev)}
    const reset=()=>{setInputTime(0),setTime(prev=>!prev)}
    const stop=()=>{setTime(prev=>!prev)}
    useEffect(()=>{
        if(time){
            let timer=setInterval(()=>{
                setInputTime(prev=>prev+1)
            },1000)
    
            return()=>{
                clearInterval(timer)
            }
        }
    },[time])

    return [time,toggle,InputTime,reset,stop]
}

export default useTimer;