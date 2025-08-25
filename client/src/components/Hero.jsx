import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <>
    <div className='max-h-screen flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-40 md:pt-30 text-center'>
        
        <h1 className='text-5xl text-gray-800 md:text-7xl font-bold'>
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

        <p className='text-xl md:text-3xl text-gray-800 my-4 px-30'>
          From first application to final offer —
          <span className='underline decoration-[#02a9eb] mx-2'>Aplyzer</span>
          keeps you organized and ahead with smart career tools.
        </p>

        {/* Hero button */}
        <button className='my-10 text-lg md:text-2xl font-medium px-4 py-2 md:px-6 md:py-4 rounded text-white
        bg-gradient-to-r from-blue-900 to-blue-500 hover:opacity-90 cursor-pointer active:opacity-100'>
          Start Tracking Jobs
        </button>

        <button className='text-lg md:text-3xl font-medium px-4 md:py-4 text-blue-600'>
            <FontAwesomeIcon icon={ faArrowDownLong }
            className='animate-bounce' />
        </button>

    </div>
    </>
  )
}

export default Hero
