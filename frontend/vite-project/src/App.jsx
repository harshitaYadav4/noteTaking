import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateNote from './pages/Create'

function App() {
  return (
    <div>
    {/* <Navbar */}

    <Navbar />

    {/* MAin */}
     {/* Routes */}
     <main>
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
