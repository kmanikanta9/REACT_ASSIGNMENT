import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataProvider from './components/DataProvider'
import DataComponent from './components/DataComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello from React</h1>
      <DataProvider>
        <DataComponent/>
      </DataProvider>
    </>
  )
}

export default App
