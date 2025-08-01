import React from 'react'
import { assets, lookInside } from '../assets/assets'
import Title from './Title'

const LookInside = () => {
  return (
    <>
    <div className='text-center'>
      <Title 
      title="Look Inside"
      subtitle="Explore how Aplyzer helps you stay on top of every opportunity with a clean, intuitive interface." />

      <div style={{ backgroundImage: `url(${lookInside.image4})` }}
      className={`h-screen bg-cover bg-center bg-no-repeat bg-fixed`}>
      </div>

      <button className='border w-1/3 py-2 mt-10 md:text-2xl font-medium rounded border border-[#02A9EB]
      hover:text-gray-200 hover:bg-gradient-main '>
        Try it now!
      </button>
    </div>
    </>
  )
}

export default LookInside
