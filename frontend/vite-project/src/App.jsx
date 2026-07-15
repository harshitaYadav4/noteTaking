import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateNote from './pages/Createnote'

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-grey-900 text-white'>
    {/* <Navbar */}
    <Navbar />

    {/* MAin */}
     {/* Routes */}
     <main className='flex-1 container mx-auto p-4'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNote />} />
      </Routes>
    </main>

    {/* Footer */}
    <Footer />


    </div>
  )
}

export default App
