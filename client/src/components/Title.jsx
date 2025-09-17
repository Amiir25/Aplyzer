import React from 'react'

const Title = ({ title, subtitle }) => {
  return (
    <>
    <div className={`text-center mt-40 md:mb-10`}>
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-gray-800 font-semibold'>{ title }</h1>
        <p className='text-sm md:text-lg text-gray-800 font-light my-4 px-2 -mt-1'>{ subtitle }</p>
    </div>
    </>
  )
}

export default Title
