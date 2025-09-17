import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const CTA = () => {
  return (
    <>
    <div style={{ backgroundImage: `url(${assets.bgCTA})` }}
    className='h-[70%] md:h-screen bg-contain bg-right bg-no-repeat mt-20 py-10'>

        <div className='px-6 md:px-16 lg:px-24 xl:px-32
        flex flex-col items-center md:items-left justify-center gap-2 h-full w-full sm:w-2/3'>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl text-gray-800 text-center sm:text-left font-bold'>
            Smarter Job Hunting Starts Here
          </h1>
          <p className='text-xl lg:text-2xl text-gray-600 text-center md:text-left lg:text-center my-4'>
            Take control of your applications, track your progress, and land your dream job with ease.
          </p>

          {/* CTA button */}
          <button className='relative text-2xl sm:text-3xl lg:text-4xl text-white font-medium py-4 md:py-6 w-60 sm:w-80 lg:w-full mt-10 rounded
          bg-gradient-to-r from-blue-900 to-blue-500 hover:opacity-90 cursor-pointer active:opacity-100 '>
            Get Started Now

            <FontAwesomeIcon icon={ faArrowRight }
            className='absolute top-1/5 -right-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl rounded-full p-2 bg-blue-500
            shadow-xl shadow-black '/>
          </button>

        </div>
    </div>
    </>
  )
}

export default CTA
