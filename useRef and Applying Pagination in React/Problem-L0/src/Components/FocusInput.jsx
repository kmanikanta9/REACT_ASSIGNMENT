import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
    const inputRef=useRef(null)
    useEffect(()=>{
        focusInput()
    },[])
    function focusInput(){
        console.log(inputRef.current)
        inputRef.current.focus()
        inputRef.current.style.color="red"
        inputRef.current.value="Focused!"
    }
  return (
    <div>
        <input ref={inputRef} type="text" placeholder='Enter Here...'/>
        <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default FocusInput