import React from 'react'
import Home from './pages/Home'
import { useLocation, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Footer from './components/Footer'
import Dashboard from './user/Dashboard'

const App = () => {

  const location = useLocation();

  return (
    <div className=''>

      {/* Navbar */}
      { !location.pathname.includes('/user') && <Navbar/> }
      
      <Routes>

        {/* Before Login */}
        <Route path='/' element={ <Home/> } />
        <Route path='/auth/signup' element={ <SignUp/> } />
        <Route path='/auth/signin' element={ <SignIn/> } />

        {/* After Login */}
        <Route path='/user/dashboard/:userId' element={ <Dashboard/> } />
      </Routes>
      
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App
