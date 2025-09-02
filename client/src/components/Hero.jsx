import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <>
    <div className='max-h-screen flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-40 md:pt-30 text-center'>
        
        <h1 className='sm:text-6xl md:text-7xl text-gray-800 font-bold'>
          <Typewriter
            words={['Apply Smarter.', 'Track Applications.', 'Stay Organized.', 'Perfect Your Resume.', 'Land Your Dream Job.']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </h1>

        <p className='sm:text-2xl md:text-3xl text-gray-800 my-4 px-4 lg:px-10 xl:px-30'>
          From first application to final offer —
          <span className='underline decoration-[#02a9eb] mx-2'>Aplyzer</span>
          keeps you organized and ahead with smart career tools.
        </p>

        {/* Hero button */}
        <Link to={'/auth/signup'}>
          <button className='my-10 sm:text-2xl font-medium px-4 py-2 md:px-6 md:py-4 rounded text-white
          bg-gradient-to-r from-blue-900 to-blue-500 hover:opacity-90 cursor-pointer active:opacity-100'>
            Start Tracking Jobs
          </button>
        </Link>

        <button className='sm:text-3xl font-medium px-4 md:py-4 text-blue-600'>
            <FontAwesomeIcon icon={ faArrowDownLong }
            className='animate-bounce' />
        </button>

    </div>
    </>
  )
}

export default Hero
