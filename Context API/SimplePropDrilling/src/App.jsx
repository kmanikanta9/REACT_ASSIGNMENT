import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext } from 'react'
import { useContext } from 'react'
import Component from './components/Component'
import Top from './components/Top'


export const dataContext=createContext()
function App() {
  const [name,setName]=useState("Mani")
  return(
    <div>
      <dataContext.Provider value={name}>
        <Top/>
      </dataContext.Provider>
    </div>
  )
}

export default App
