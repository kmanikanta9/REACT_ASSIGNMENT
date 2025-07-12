import React, { useRef } from 'react'

import {useSelector,useDispatch} from "react-redux"
import { addBook } from '../redux/action'
import { useState } from 'react'


const AddBook = () => {
    const [form,setForm] =useState({title:"",author:"",genre:""})
    const dispatch=useDispatch()

    const handleChange=(e)=>{
      setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      if(form.title && form.author&& form.genre){
        dispatch({
          type:"ADD",
          payload:{...form, id:Date.now(),status:false}
        })
        setForm({ title: '', author: '', genre: '' });
      }
    }
    
  return (
    <div>
        <form onClick={handleSubmit}>
          <label>
            Title:
            <input type="text" onChange={handleChange} name="title" value={form.title} />
          </label>
          <label>
            Author:
            <input type="text" onChange={handleChange} name="author" value={form.author} />
          </label>
          <label>
            Genre:
            <input type="text" onChange={handleChange} name="genre" value={form.genre} />
          </label>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddBook
