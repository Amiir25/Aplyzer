import React from 'react'

const QuickActions = () => {

    return (
        <>
        <div className='px-6 md:px-12 lg:px-24 xl:px-32 my-40'>

            <h1 className='text-2xl md:text-4xl font-semibold mb-8'>Quick Actions</h1>

            <div className='flex flex-col md:flex-row gap-10'>
                <button className='border w-64 py-2 mt-8 md:text-xl font-medium border border-[#02A9EB]
                    hover:text-gray-200 hover:bg-gradient-main rounded-lg'>
                    Add new job
                </button>
                <button className='border w-64 py-2 mt-8 md:text-xl font-medium border border-[#02A9EB]
                    hover:text-gray-200 hover:bg-gradient-main rounded-lg'>
                    Check resume
                </button>
                <button className='border w-64 py-2 mt-8 md:text-xl font-medium border border-[#02A9EB]
                    hover:text-gray-200 hover:bg-gradient-main rounded-lg'>
                    Macth job description
                </button>
                <button className='border w-64 py-2 mt-8 md:text-xl font-medium border border-[#02A9EB]
                    hover:text-gray-200 hover:bg-gradient-main rounded-lg'>
                    Generate cover letter
                </button>
            </div>
        </div>
        </>
    )
}

export default QuickActions
