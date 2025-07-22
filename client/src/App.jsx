import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </div>
  )
}

export default App
