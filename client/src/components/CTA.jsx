import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const CTA = () => {
  return (
    <>
    <div style={{ backgroundImage: `url(${assets.bgFAQAndCTA})` }}
    className='h-screen bg-cover bg-center bg-no-repeat mt-20'>

        <div className='px-6 md:px-16 lg:px-24 xl:px-32
        flex flex-col items-center justify-center gap-2 h-full w-2/3'>

          <h1 className='text-6xl text-gray-800 text-cente font-bold'>Smarter Job Hunting Starts Here</h1>
          <p className='text-2xl text-center text-gray-600 my-4'>Take control of your applications, track your progress, and land your dream job with ease.</p>

          {/* CTA button */}
          <button className='relative text-lg md:text-4xl text-white font-medium py-2 md:py-6 w-full mt-10 mx-6 rounded
          bg-gradient-to-r from-blue-900 to-blue-500 hover:opacity-90 cursor-pointer active:opacity-100 '>
            Get Started Now

            <FontAwesomeIcon icon={ faArrowRight }
            className='absolute top-1/5 -right-4 w-10 h-10 rounded-full p-2 bg-blue-500
            shadow-xl shadow-black '/>
          </button>

        </div>
    </div>
    </>
  )
}

export default CTA
