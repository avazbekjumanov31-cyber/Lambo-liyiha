import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Search from './pages/Search'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Search' element={<Search />} />
      </Routes>
    </>
  )
}

export default App