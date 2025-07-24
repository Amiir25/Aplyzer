import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='max-h-screen flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-40 md:pt-30 text-center'>
        
        <h1 className='text-5xl md:text-7xl font-bold'>Track Jobs. Optimize Resumes. Get Hired.</h1>
        <p className='text-xl md:text-3xl font-light my-4'>
          From first application to final offer —
          <span className='underline decoration-[#F51D28] mx-2'>Aplyzer</span>
          keeps you organized and ahead with smart career tools.
        </p>

        {/* Hero buttons */}
        <div className='mt-10 flex gap-12'>
          
          <button className='text-lg md:text-2xl font-medium px-4 py-2 md:px-6 md:py-4 rounded bg-[#F51D28] text-white hover:opacity-90 '>
            Get Started Free
          </button>

          <button className='text-lg md:text-2xl font-medium border px-4 py-2 md:px-6 md:py-4 rounded border-[#F51D28] hover:text-gray-600 '>
            See How It Works
          </button>

        </div>

    </div>
    </>
  )
}

export default Hero
