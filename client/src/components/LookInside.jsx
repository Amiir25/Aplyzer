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

      <button className='w-1/3 py-2 mt-10 md:text-2xl font-medium rounded border border-blue-500
      bg-gradient-to-r hover:from-blue-900 hover:to-blue-500 hover:text-white hover:border-white
      hover:opacity-90 cursor-pointer active:opacity-100'>
        Try it now!
      </button>
    </div>
    </>
  )
}

export default LookInside
