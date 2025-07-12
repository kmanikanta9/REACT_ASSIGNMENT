import React, { useEffect, useState } from 'react'
import axios from "axios"

const Products = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setProducts(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
    console.log(products)
  return (
    <div>
      {products && products.map((e)=>(
        <div>
            <img src={e?.image} alt={e?.title} />
            <h2>{e?.title}</h2>
            <p>{e.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Products
