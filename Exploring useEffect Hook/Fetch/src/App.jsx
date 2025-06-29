import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchDisplay from './components/FetchAndDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchDisplay/>
    </>
  )
}

export default App
