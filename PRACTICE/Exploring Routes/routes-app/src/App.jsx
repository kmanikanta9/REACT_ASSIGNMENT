import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
    </>
  )
}

export default App
