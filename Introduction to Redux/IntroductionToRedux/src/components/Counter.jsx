import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { decrement, increment } from '../action'
const Counter = () => {
    const count=useSelector((state)=>state.count)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
