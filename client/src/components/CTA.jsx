import React from 'react'
import Title from './Title'

const CTA = () => {
  return (
    <>
    <div className='px-6 md:px-16 lg:px-24 xl:px-32'>

        <Title
        title="Smarter Job Hunting Starts Now"
        subtitle="Aplyzer gives you the tools to organize, optimize, and succeed." />

        {/* CTA buttons */}
        <div className='flex justify-center gap-12'>
          
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

export default CTA
