import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Component/Home'
import ContextProvider from './Context/ContextProvider'


function App() {

  return (
    <ContextProvider>
      <Home/>
    </ContextProvider>
  )
}

export default App
