import React from 'react'
import { tools } from '../assets/assets'

const WhyAplyzer = () => {
  return (
    <>
    <div className='my-50 text-center'>

        <h1 className='text-2xl md:text-4xl font-semibold'>Smarter Tools for Smarter Job Seekers</h1>
        <p className='md:text-lg font-light my-4 -mt-1'>
          <span className='underline decoration-[#F51D28] mx-2'>Aplyzer</span>
          combines AI and simplicity to help you track, optimize, and succeed in your job hunt.
        </p>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10'>
            {
                tools.map(tool => (
                    <div className='text-left'>
                        <img src={ tool.image } alt={ tool.title } className='w-full h-1/2 mb-8' />
                        <h2 className='text-lg font-semibold'>{ tool.title }</h2>
                        <p className='text-xs md:text-sm'>{ tool.desc }</p>
                        <button className='px-2 py-1 mt-4 border border-[#F51D28] rounded
                        hover:bg-[#F51D28] hover:text-white'>
                            Lear More
                        </button>
                    </div>
                ))
            }
        </div>

    </div>
    </>
  )
}

export default WhyAplyzer
