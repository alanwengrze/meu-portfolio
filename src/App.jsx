import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { Outlet } from 'react-router-dom'

import { Navbar } from './components/Navbar'

import { Footer } from './components/Footer'



function App() {
  return (
    <div className="min-h-screen max-h-full">
      <Navbar />
      <div className='px-12 py-6 min-h-full'>
        <Outlet />
      </div>
        <Footer />
    </div>
  )
}

export default App
