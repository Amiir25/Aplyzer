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
import { motion } from "framer-motion";
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {

  const location = useLocation();

  return (
    // Framer motion for animation on page change
    <motion.div
      key={location.pathname}
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.98, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {/* Navbars */}
      { (location.pathname.includes('user')) && <Navbar/>}

      <Routes>

        {/* Home routes */}
        <Route path='/' element={ <Home/> } />
        <Route path='/auth/signup' element={ <SignUp/> } />
        <Route path='/auth/signin' element={ <SignIn/> } />

        {/* User routes */}
        <Route path='/user/dashboard/:userId' element={ <ProtectedRoute> <Dashboard/> </ProtectedRoute> } />
        <Route path='/user/all-jobs/:userId' element={ <ProtectedRoute> <AllJobs/> </ProtectedRoute> } />
        <Route path='/user/job-details/:jobId' element={ <ProtectedRoute> <JobDetails/> </ProtectedRoute> } />
        <Route path='/user/add-new-job/:userId' element={ <ProtectedRoute> <AddNewJob/> </ProtectedRoute> } />
        <Route path='/user/update-job/:jobId' element={ <ProtectedRoute> <UpdateJob/> </ProtectedRoute> } />
      
      </Routes>

      {/* Footer */}
      <Footer/>
    </motion.div>
  )
}

export default App;
