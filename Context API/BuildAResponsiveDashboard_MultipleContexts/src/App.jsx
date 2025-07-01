import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { ThemeContextProvider } from './Components/ThemeContext'
import { AuthContextProvider } from './Components/AuthContext'

function App() {
  
return(
    <div>
        <ThemeContextProvider>
            <AuthContextProvider>
                <Navbar/>
            </AuthContextProvider>
        </ThemeContextProvider>
        
    </div>
)
  
}

export default App
