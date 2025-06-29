import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function FetchDisplay(){
    const [data,setData]=useState([])
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false);
    const [search,setSearch]=useState("")

    async function fetchdata(){
        setLoading(true)
        try {
            let response=await fetch("https://jsonplaceholder.typicode.com/users")
            let result=await response.json()
            console.log(result)
            setData(result)
        } catch (error) {
            setError("Data Not Found")
            setLoading(false)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchdata()
        
    },[])
    
    const searching=data.filter((s)=>s.name.toLowerCase().includes(search.toLowerCase()))

    return(
        <>
        <label style={{color:"blue"}}>Search:
            <input name="search" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search By Name..." />
        </label>
        <div>
            {loading && <h1 style={{color:"yellow"}}>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {searching.map((user)=>(
                <div key={user.id} style={{border:"2px solid white",margin:"10px",boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:"10px",display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>City: {user.address.city}</p>
                </div>
            ))}

            
        </div>
        
        </>
    )
}

export default FetchDisplay;