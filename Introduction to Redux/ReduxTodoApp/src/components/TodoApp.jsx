import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addTodo, complete, deleted } from '../redux/action'
import AddTodo from './AddTodo'

const TodoApp = () => {
    const data=useSelector((state)=>state)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>Add Todos</h1>
      <AddTodo/>
       {data && data.map((todo)=>(
        <div>

          <li onClick={()=>dispatch(complete(todo.id))} style={{textDecoration:(todo.status)?"line-through":"none"}} key={todo.id}>{todo.title}</li>
          <button onClick={()=>dispatch(deleted(todo.id))}>Delete</button>
        </div>
       ))}
    </div>
  )
}

export default TodoApp
