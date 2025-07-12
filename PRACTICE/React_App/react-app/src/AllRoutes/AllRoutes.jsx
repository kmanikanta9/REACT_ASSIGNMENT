import React from 'react'

import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import ProductDetails from '../Pages/ProductDetails'
import { Routes,Route } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/productdetails' element={<ProductDetails/>}/>
    
    </Routes>
  )
}

export default AllRoutes
