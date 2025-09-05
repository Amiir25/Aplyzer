import React from 'react'

const QuickActions = () => {

    const buttons = ['Add New Job', 'Check Resume', 'Match Job Description', 'Generate Cover Letter'];

    return (
        <>
        <div className='px-6 md:px-12 lg:px-24 xl:px-32 my-40'>

            <h1 className='text-2xl md:text-4xl font-semibold mb-4'>Quick Actions</h1>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-4'>
                {
                    buttons.map((button, i) => (
                        <button key={i} className='py-2 mt-8 text-sm md:text-xl font-medium border border-blue-500 rounded
                        hover:text-white hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-500
                        hover:opacity-90 active:opacity-100 cursor-pointer'>
                            { button }
                        </button>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default QuickActions
