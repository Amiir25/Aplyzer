import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className=''>

      {/* Navbar */}
      <Navbar/>
      
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/signup' element={ <SignUp/> } />
        <Route path='/signin' element={ <SignIn/> } />
        <Route path='/dashboard/:userId' element={ <Dashboard/> } />
      </Routes>
      
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App
