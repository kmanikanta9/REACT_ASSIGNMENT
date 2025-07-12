import React from 'react'

import {useSelector,useDispatch} from "react-redux"
import { useState } from 'react'
import { addTask,removeTask,toggleTask } from '../redux/taskSlice'
const AddTask = () => {
    const tasks=useSelector(state=>state.tasks)
    const dispatch=useDispatch()
    const [task,setTask]=useState("")
    console.log(tasks)
    function handleTask(e){
        if(task!==""){
            dispatch(addTask(task))
            setTask("")
        }
    }
    
  return (
    <div>
        
        <label>
            AddTask:
            <input type="text" name="task"  value={task} onChange={(e)=>setTask(e.target.value)}/>
        </label>
        <button onClick={handleTask}>Add Task</button>
        <ul>
            {tasks.map((task)=>(
                <li key={task.id}>
                    <input type="checkbox" checked={task.completed}  onChange={()=>dispatch(toggleTask(task.id))}/>
                    <span
              style={{
                marginLeft: '10px',
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.task}
            </span>
            <button onClick={()=>dispatch(removeTask(task.id))}>Delete</button>
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default AddTask
