import React from 'react'
import { Link } from 'react-router-dom'

import style from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  )
}

export default Navbar
