import React from 'react'
import Home from './pages/Home'
import { useLocation, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Footer from './components/Footer'
import Dashboard from './user/Dashboard'
import UserLayout from './user/UserLayout'
import Jobs from './user/Jobs'

const App = () => {

  const location = useLocation();

  return (
    <div className=''>

      {/* Navbar */}
      { !location.pathname.includes('/user') && <Navbar/> }
      
      <Routes>

        {/* Home routes */}
        <Route path='/' element={ <Home/> } />
        <Route path='/auth/signup' element={ <SignUp/> } />
        <Route path='/auth/signin' element={ <SignIn/> } />

        {/* User routes */}
        <Route path='/user' element={ <UserLayout/> }>
          <Route path='dashboard/:userId' element={ <Dashboard/> } />
          <Route path='jobs' element={ <Jobs/> } />
        </Route>
      </Routes>
      
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App;
