import React from 'react'

const Title = ({ title, subtitle, align }) => {
  return (
    <>
    <div className={`text-${align} mt-40 md:mb-10`}>
        <h1 className='text-3xl md:text-4xl text-gray-800 font-semibold'>{ title }</h1>
        <p className='md:text-lg text-gray-800 font-light my-4 -mt-1'>{ subtitle }</p>
    </div>
    </>
  )
}

export default Title
