import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const [produts,setProducts]=useState([])
    const {id}=useParams()
    const navigate=useNavigate()
        async function fetchData(){
            let response=await fetch(`https://fakestoreapi.com/products/${id}`)
            let result=await response.json()
            setProducts(result)
            console.log(result)
        }
    
        useEffect(()=>{
            fetchData()
        },[])
        if(!produts) return <h1>Loading...</h1>
  return (
    <div>
        <button onClick={()=>navigate("/")}>Back</button>
      <h1>Produtcs Details</h1>
      <h1>{produts.title}</h1>
      <img src={produts.image} width={150} alt="" />
      
    </div>
  )
}

export default ProductDetails
