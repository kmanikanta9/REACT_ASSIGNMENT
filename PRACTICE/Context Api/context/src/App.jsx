import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const userContext=createContext();
function App() {
  const [user,setUser] = useState("T")

  return(
    <userContext.Provider value={user}>
      <Parent/>
    </userContext.Provider>
  )
 
}
function Parent(){
  return <Child/>
}
function Child(){
  return <GrandChild />
}
function GrandChild(){
  const user=useContext(userContext)
  return <h1>Hello,{user}</h1>
}

export default App
