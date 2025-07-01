import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeComponent from './components/ThemeComponent'
import { ThemeContext } from './components/ThemeContext'



function App() {

  const[theme,setTheme]=useState("light")

  function toggleTheme(){
    let newTheme=theme==="dark"?"light":"dark"
    setTheme(newTheme)
  }
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <h1 style={{color:theme=="dark"?"black":"white",backgroundColor:theme=="dark"?"white":"black"}}>This is the Context</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ThemeComponent/>
      </ThemeContext.Provider>
      
    </>
  )
}

export default App
