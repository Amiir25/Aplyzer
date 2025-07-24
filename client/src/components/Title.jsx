import React from 'react'

const Title = ({ title, subtitle }) => {
  return (
    <>
    <div className='text-center mt-40 md:mb-10'>
        <h1 className='text-3xl md:text-4xl font-semibold'>{ title }</h1>
        <p className='md:text-lg font-light px-6 my-4 -mt-1'>{ subtitle }</p>
    </div>
    </>
  )
}

export default Title
