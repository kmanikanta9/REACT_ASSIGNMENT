import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { setFilter } from '../redux/FilterAction'


const FilterBooks = () => {
    const data=useSelector((state)=>state.filtered)
    const dispatch=useDispatch()
    console.log(data)
    const handleFilter=(e)=>{
      dispatch({
        type:"set_filter",
        payload:{[e.target.name]:e.target.value}
      })
    }
  return (
    <div>
        <label>Search:  </label>
        <input type="text" name="genre" onChange={handleFilter} placeholder='search by genre' />
         <input type="text" name="author" onChange={handleFilter} placeholder='search by author' />
          <input type="text" name="title" onChange={handleFilter} placeholder='search by title' />
  
    </div>
  )
}

export default FilterBooks
