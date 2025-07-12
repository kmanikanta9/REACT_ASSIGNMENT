import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/action'

const AddTodo = () => {
    const item=useRef()
    const dispatch=useDispatch()
  return (
    <div>
        <input type="text" name="todo" onChange={(e)=>{item.current={title:e.target.value}}} />
        <button onClick={()=>dispatch(addTodo(item.current))}>Add Todo</button>
      
    </div>
  )
}

export default AddTodo
