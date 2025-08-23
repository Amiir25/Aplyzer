import { faTrash, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const DeleteJob = ({ jobId, job_title, company_name, onClose, onDelete }) => {

    // Delete message
    const [deleteMsg, setDeleteMsg] = useState('');
    const [showDeleteMsg, setShowDeleteMsg] = useState(false);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/user/delete-job/${jobId}`);
            setShowDeleteMsg(true);
            setTimeout(() => {
                setShowDeleteMsg(false);
                onDelete();
            }, 2000);
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Something went wrong. Please try again.'
            setDeleteMsg(errorMsg);
            setShowDeleteMsg(true);
            setTimeout(() => { setShowDeleteMsg(false) }, 3000);
        }
    }
  return (
    <>
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-700/60 flex items-center justify-center'>
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

        {/* Form message */}
        <div className={`${ showDeleteMsg ? 'fixed' : 'hidden' } top-10 left-10 right-10 w-fit mx-auto
        transform transition-all duration-300`}>
            <p className={`${ deleteMsg ? 'bg-red-500' : 'bg-green-500' } 
            text-white text-2xl font-medium px-8 py-4 rounded-xl`}>
            { deleteMsg || 'Job Deleted Successfully' }
            </p>
        </div>
    </div>
    </>
  )
}

export default DeleteJob