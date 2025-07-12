import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemComponent from './components/ItemComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ItemComponent/>
    </>
  )
}

export default App
