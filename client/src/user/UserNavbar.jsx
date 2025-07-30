import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const UserNavbar = ({ user }) => {

  const location = useLocation();
  return (
    <>
    <nav className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-4 flex items-center justify-between
      text-gray-800 md:text-lg font-medium">

        {/* Logo */}
        <Link to={'/'} className="w-1/6 md:w-1/7">
            <img src="/logo-2.PNG" alt="Logo Image" />
        </Link>

        {/* Links */}
        <div className="relative gap-8 hidden md:flex">
            <Link to='/'
              className={`${ location.pathname.includes('/dashboard') && 'border-b-3 border-[#02A9EB]' } text-sm
              hover:text-gray-600`}>
              Dashboard
            </Link>
            <Link to='/' className="text-sm hover:text-gray-600">Jobs</Link>
            <Link to='/' className="text-sm hover:text-gray-600">Resume Cheker</Link>
            <Link to='/' className="text-sm hover:text-gray-600">Job Matching</Link>
            <Link to='/' className="text-sm hover:text-gray-600">Cover Letter</Link>
        </div>

        {/* Profile */}
        <div>
          <p className='flex items-center justify-center text-2xl md:text-4xl text-white w-12 h-12
            rounded-full bg-[#02A9EB]'>
            {/* { user.username[0] } */}
          </p>
        </div>

    </nav>
    </>
  )
}

export default UserNavbar
