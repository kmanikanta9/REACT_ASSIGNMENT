import React, { useEffect, useRef, useState } from 'react'

const RenderCount = () => {
    const [count,setCount]=useState(0)
    const prevCount=useRef(0)
    const renderCount=useRef(1)

    useEffect(()=>{
        renderCount.current+=1
        prevCount.current=count
    })
  return (
    <div>
      <h1>Count:{count}</h1>
      <p>{prevCount.current}</p>
      <p>{renderCount.current}</p>
      <button onClick={()=>setCount(prev=>prev+1)}>Increase Count</button>
      <button onClick={()=>setCount(prev=>prev-1)}>Decrease count</button>
    </div>
  )
}

export default RenderCount
