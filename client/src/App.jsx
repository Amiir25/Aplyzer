import React from 'react'
import Home from './pages/Home'
import { useLocation, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Footer from './components/Footer'
import Dashboard from './user/pages/Dashboard'
import AllJobs from './user/pages/AllJobs'
import JobDetails from './user/pages/JobDetails'
import AddNewJob from './user/pages/AddNewJob'
import UpdateJob from './user/pages/UpdateJob'

const App = () => {

  const location = useLocation();

  return (
    <div className=''>
      
      <Routes>

        {/* Home routes */}
        <Route path='/' element={ <Home/> } />
        <Route path='/auth/signup' element={ <SignUp/> } />
        <Route path='/auth/signin' element={ <SignIn/> } />

        {/* User routes */}
        <Route path='/user/dashboard/:userId' element={ <Dashboard/> } />
        <Route path='/user/all-jobs/:userId' element={ <AllJobs/> } />
        <Route path='/user/job-details/:jobId' element={ <JobDetails/> } />
        <Route path='/user/add-new-job/:userId' element={ <AddNewJob/> } />
        <Route path='/user/update-job/:jobId' element={ <UpdateJob/> } />
        
      </Routes>
      
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App;
