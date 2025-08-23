import { faTrash, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DeleteJob = ({ job_title, company_name, onClose, onDelete }) => {


  return (
    <>
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-700/60'>
        <div className='w-fit bg-white flex flex-col items-center justify-center p-10 rounded-2xl'>
            <FontAwesomeIcon icon={ faTriangleExclamation } className='text-3xl text-red-600 mb-2' />
            <h1 className='text-4xl font-bold'>Are you sure?</h1>
            <p className='text-xl my-2'>You're about to delete the application for:</p>
            <p className='mb-2'>
                <span className='font-medium'>"{ job_title }"</span> at <span className='text-indigo-800 font-bold'>{ company_name }</span>
            </p>
            <p className='text-sm text-gray-700'>This action cannot be undone.</p>

            <div className='flex items-center gap-10 mt-10'>
                <button
                onClick={ onClose }
                className='px-4 py-2 rounded text-xl font-medium text-gray-900
                bg-gradient-to-r from-gray-300 to-gray-100 hover:from-gray-400 hover:to-gray-200 '>
                    Cancel
                </button>
                <button
                onClick={ handleDelete }
                className='px-4 py-2 rounded text-xl font-medium text-white
                bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700'>
                    <FontAwesomeIcon icon={ faTrash } />
                    <span> Delete</span>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default DeleteJob