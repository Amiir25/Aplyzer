import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';

const UserNavbar = () => {

  const location = useLocation();
  const { userId } = useParams();
  console.log('userId in userNavbar', userId)

  const [user, setUser] = useState();

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/profile/${userId}`);
        console.log('response:', response);
        setUser(response.data.user);
      } catch (error) {
        const errorMsg = error.response?.data?.message;
        console.log('Error while fetching user data in user navbar:', errorMsg);
      }
    }
    fetchUserData();
  })

  console.log('User in user navbar:', user);
  return (
    <>
    <nav className="relative px-6 md:px-16 lg:px-24 xl:px-32 py-4 flex items-center justify-between
      text-gray-800 md:text-lg font-medium">

        {/* Logo */}
        <img src="/logo-2.PNG" alt="Logo Image" className="w-1/6 md:w-1/7" />

        {/* Links */}
        {
          // Hide jobs link in job details page
          !location.pathname.includes('job-details') &&
          
          <div className="relative gap-8 hidden md:flex">
            <Link to={`/user/dashboard/${userId}`}
              className={`${ location.pathname.includes('/dashboard') && 'border-b-3 border-[#02A9EB]' }
                text-sm hover:text-gray-600`}>
              Dashboard
            </Link>

            <Link to={`/user/all-jobs/${userId}`}
              className={`${ location.pathname.includes('/all-jobs') && 'border-b-3 border-[#02A9EB]' }
                text-sm hover:text-gray-600`}>
                Jobs
            </Link>

            <Link to='/' className="text-sm hover:text-gray-600">Resume Cheker</Link>
            <Link to='/' className="text-sm hover:text-gray-600">Job Matching</Link>
            <Link to='/' className="text-sm hover:text-gray-600">Cover Letter</Link>
          </div>
        }

        {/* Profile */}
        <div>
          <p className='flex items-center justify-center text-2xl md:text-4xl text-white w-12 h-12
            rounded-full bg-[#02A9EB]'>
            {/* { username[0] } */}
          </p>
        </div>

    </nav>
    </>
  )
}

export default UserNavbar
