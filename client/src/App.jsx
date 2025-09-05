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
import { AnimatePresence, motion } from "framer-motion";
import UserNavbar from './user/components/UserNavbar'

const App = () => {

  const location = useLocation();

  // return (
  //   <div className=''>

  //       <Routes>

  //         Home routes
  //         <Route path='/' element={ <Home/> } />
  //         <Route path='/auth/signup' element={ <SignUp/> } />
  //         <Route path='/auth/signin' element={ <SignIn/> } />

  //         User routes
  //         <Route path='/user/dashboard/:userId' element={ <Dashboard/> } />
  //         <Route path='/user/all-jobs/:userId' element={ <AllJobs/> } />
  //         <Route path='/user/job-details/:jobId' element={ <JobDetails/> } />
  //         <Route path='/user/add-new-job/:userId' element={ <AddNewJob/> } />
  //         <Route path='/user/update-job/:jobId' element={ <UpdateJob/> } />
          
  //       </Routes>
      
  //     {/* Footer */}
  //     <Footer/>
  //   </div>
  // )

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
      {location.pathname.includes('/user') ? <UserNavbar/> : <Navbar/>}

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
    </motion.div>
  )
}

export default App;
