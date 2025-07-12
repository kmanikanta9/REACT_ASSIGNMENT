import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTask from './components/AddTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTask/>
    </>
  )
}

export default App
