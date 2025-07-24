import React from 'react'
import { tools } from '../assets/assets'
import Title from './Title'

const SmarterTools = () => {
  return (
    <>
    <div className='text-center px-6 md:px-16 lg:px-24 xl:px-32'>

        {/* Title */}
        <Title
        title="Smarter Tools for Smarter Job Seekers"
        subtitle="Aplyzer combines AI and simplicity to help you track, optimize, and succeed in your job hunt." />

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                tools.map((tool, i) => (
                    <div key={ i }
                    className='text-left mx-auto flex md:flex-col gap-10 md:gap-6 p-4
                    shadow-2xl rounded hover:shadow-xl'>
                        
                        <img src={ tool.image } alt={ tool.title } className='flex-1 h-50 max-w-1/2 md:max-w-full md:h-1/2' />
                        
                        <div className='flex-1'>
                          <h2 className='text-lg font-semibold'>{ tool.title }</h2>
                          <p className='text-xs md:text-sm'>{ tool.desc }</p>
                          <button className='text-sm md:text-md px-2 py-1 mt-4 border border-[#F51D28] rounded
                          hover:bg-[#F51D28] hover:text-white'>
                              Lear More
                          </button>
                        </div>

                    </div>
                ))
            }
        </div>

    </div>
    </>
  )
}

export default SmarterTools
