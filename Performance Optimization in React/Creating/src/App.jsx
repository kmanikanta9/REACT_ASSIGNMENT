import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import FormData from './components/FormData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormData/>
    </>
  )
}

export default App
