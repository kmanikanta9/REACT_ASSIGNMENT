import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">Products</Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      
    </div>
  )
}

export default Navbar
