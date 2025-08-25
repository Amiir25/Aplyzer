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

        {/* Hero buttons */}
        <div className='mt-10 flex gap-12'>
          
          <button className='text-lg md:text-2xl font-medium px-4 py-2 md:px-6 md:py-4 rounded bg-gradient-main text-white hover:opacity-90 '>
            Get Started Free
          </button>

          <button className='text-lg md:text-2xl font-medium px-4 py-2 md:px-6 md:py-4 rounded border border-[#02A9EB] hover:text-gray-600 '>
            See How It Works
          </button>

        </div>

    </div>
    </>
  )
}

export default Hero
