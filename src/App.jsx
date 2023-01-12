import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { Outlet } from 'react-router-dom'

import { Navbar } from './components/Navbar'

import { Footer } from './components/Footer'



function App() {
  return (
    <div className="min-h-screen max-h-full bg-gradient-to-t from-sky-800 to-blue-900">
      <Navbar />
      <div className='px-12 py-6 min-h-full'>
        <Outlet />
      </div>
        <Footer />
    </div>
  )
}

export default App
