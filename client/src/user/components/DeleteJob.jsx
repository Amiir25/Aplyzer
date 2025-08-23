import { faTrash, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DeleteJob = ({ job_title, company_name, onClose, onDelete }) => {

    console.log(job_title)
  return (
    <>
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-gray-700'>
        <div>
            <FontAwesomeIcon icon={ faTriangleExclamation } />
            <h1>Are you sure?</h1>
            <p>You're about to delete the application for:</p>
            <p><span>"{ job_title }"</span> at <span>{ company_name }</span></p>
            <p>This action cannot be undone.</p>

            <div>
                <button>Cancel</button>
                <button>
                    <FontAwesomeIcon icon={ faTrash } />
                    Delete
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default DeleteJob