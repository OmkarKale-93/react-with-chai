import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
     <h1>Hi its context api lecture</h1> 
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
