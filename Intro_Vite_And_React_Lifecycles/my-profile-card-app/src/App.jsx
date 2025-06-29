import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {

  return (
    <>
      <ProfileCard name="Mani" age={21} bio="This is the first one."/>
      <ProfileCard name="Manikanta" age={21} bio="This is the second."/>
      <ProfileCard/>
    </>
  )
}

export default App
