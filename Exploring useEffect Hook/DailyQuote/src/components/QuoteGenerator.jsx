import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Generator(){
    const [quote,setQuote]=useState("")
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false);

    async function fetchdata(){
        setLoading(true)
        try {
            let response=await fetch("https://dummyjson.com/quotes/random")
            let result=await response.json()
            console.log(result)
            setQuote(result)
        } catch (error) {
            setError("Data Not Found")
            setLoading(false)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        let timer=setInterval(()=>{
            fetchdata()
        },3000)
        return ()=>{
            clearInterval(timer)
        }
    },[])

    return(
        <>
        <div>
            {loading && <h1 style={{color:"yellow"}}>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {quote && <h1>Quoute: {quote.quote}</h1>}
        </div>
        </>
    )
}

export default Generator;