import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Box({children}){
  
  return(
    <div style={{border:"2px solid red",padding:"10px",margin:"10px"}}>
      {children}
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState("dark")
  function handleTheme(){
    let newTheme=theme==="dark"?"light":"dark"
    setTheme(newTheme)
  }
  return (
    <>
      <Box>
        <h1 style={{color:theme=="dark"?"black":"white",backgroundColor:theme==="dark"?"white":"black"}}>Hello from React</h1>
      </Box>
      <Box>
        <p style={{color:theme=="dark"?"black":"white",backgroundColor:theme==="dark"?"white":"black"}}>This is inside from Box</p>
      </Box>
      <button onClick={handleTheme}>{theme==="dark"?"dark":"light"}</button>
    </>
  )
}

export default App
