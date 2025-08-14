import React from 'react'
import Home from './pages/Home'
import { useLocation, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Footer from './components/Footer'
import Dashboard from './user/pages/Dashboard'
import AllJobs from './user/pages/AllJobs'
import Job from './user/pages/Job'

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
        <Route path='/user/dashboard/:userId' element={ <Dashboard/> } />
        <Route path='/user/all-jobs/:userId' element={ <AllJobs/> } />
        <Route path='/user/job-details/:userId' element={ <Job/> } />
        
      </Routes>
      
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App;
