import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const [produts,setProducts]=useState([])

    async function fetchData(){
        let response=await fetch("https://fakestoreapi.com/products")
        let result=await response.json()
        setProducts(result)
    }

    useEffect(()=>{
        fetchData()
    },[])


  return (
    <div>
      <h1>Produtcs</h1>
      {produts.map((product)=>(
        <div>
            <img src={product.image} width={150} alt="" />
            <p>{product.title}</p>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`}>View More</Link>

        </div>
      ))}
    </div>
  )
}

export default Products
