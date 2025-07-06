import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ApplyPagination = () => {
    const [page,setPage]=useState(1)
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    const pageRef=useRef(null)

    const pagesPage=5
    async function fetchData(){
        setLoading(true)
        try {
            let response=await fetch("https://rickandmortyapi.com/api/character")
            let result=await response.json()
            setData(result.results)
            console.log(result.results)
            setLoading(false)
        } catch (error) {
            setError("404 Data Not Found")
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    useEffect(()=>{
        pageRef.current.focus()
        pageRef.current.style.color="green"
    },[page])

    let last=page*pagesPage;
    let first=last-pagesPage;
    const Array=data.slice(first,last)
  return (
    <>
    <h1 style={{color:"violet"}}>Pagination for Characters:(<span ref={pageRef}>{page}</span>)</h1>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"15px"}}>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {Array && Array.map((char)=>(
            <div style={{border:"2px solid",gap:"10px"}}>

                <p>Name: {char.name}</p>
                <p>Gender: {char.gender}</p>
                <p>Species:{char.species}</p>
                <p>Status:{char.status}</p>
            </div>
            
        ))}
        
    </div>
    <button onClick={()=>setPage(prev=>prev-1)}>Prev</button>
        <button onClick={()=>setPage(prev=>prev+1)}>Next</button>
    </>
  )
}

export default ApplyPagination
