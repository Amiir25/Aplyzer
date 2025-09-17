import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom';

const QuickActions = ({ user }) => {

    return (
        <>
        <div className='px-6 md:px-12 lg:px-24 xl:px-32 my-40'>

            <h1 className='text-2xl md:text-4xl font-semibold mb-4'>Quick Actions</h1>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-4'>
                {/* Your jobs */}
                <button key={i} className='py-2 mt-8 text-sm md:text-xl font-medium border border-blue-500 rounded
                hover:text-white hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-500
                hover:opacity-90 active:opacity-100 cursor-pointer'>
                    <Link to={`/user/add-new-job/${user.id}`}>
                        Your jobs
                    </Link>
                </button>
                
                {/* Add new job */}
                <button key={i} className='py-2 mt-8 text-sm md:text-xl font-medium border border-blue-500 rounded
                hover:text-white hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-500
                hover:opacity-90 active:opacity-100 cursor-pointer'>
                    <Link to={`/user/add-new-job/${user.id}`}>
                        Add new job
                    </Link>
                </button>
            </div>
        </div>
        </>
    )
}

export default QuickActions
