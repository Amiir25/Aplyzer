import React from 'react'
import { faCircleDot, faLocationDot, faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
import dayjs from 'dayjs'

const FavoriteJobs = ({ jobs }) => {

    const favoriteJobs = jobs.filter(job => job.favorite);
    
    // Colors for job status
    const statusClasses = {
        Applied: 'bg-blue',
        Waiting: 'bg-yellow',
        Interviewed: 'bg-purple',
        Hired: 'bg-green',
        Rejected: 'bg-red',
        Quit: 'bg-gray',
    }
  return (
    <>
    <div className='px-6 md:px-12 lg:px-24 xl:px-32 my-20'>

        <h1 className='text-2xl md:text-4xl font-semibold'>Favorite Jobs</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 my-10'>
            {
                favoriteJobs.slice(0, 3).map((job, i) => (
                    <div key={ i }
                        className='relative m-2 pt-10 pb-2 px-4 shadow shadow-gray-900 rounded'>

                        {/* Status */}
                        <p className={`absolute top-0 left-0 text-lg text-gray-100 font-medium px-2 py-1
                        ${ statusClasses[job.status] }`
                        }>
                            {job.status}
                        </p>

                        {/* Star */}
                        <button
                            className={`absolute top-1 right-1 text-lg text-gray-800 font-medium`}>
                            <FontAwesomeIcon icon={ solidStar }
                                className={`text-orange-500`} />
                        </button>

                        {/* Title & Experiance level */}
                        <div>
                            <span className='text-2xl md:text-3xl font-bold'>{job.job_title}</span>
                            <small className='text-xs text-pink-500 ml-2'>{ job.exp_level }</small>
                        </div>

                        {/* Company, Location, Type, and Mode */}
                        <div className='flex items-center justify-between'>
                            <div className='text-gray-700'>
                                <p className='text-lg md:text-xl'>{job.company_name}</p>
                                <p className='text-sm'>
                                    <FontAwesomeIcon icon={faLocationDot} className='me-1' />
                                    {job.location}
                                </p>
                            </div>
                            <p className='min-w-fit text-xs bg-gray-200 px-2 py-1 text-fuchsia-800 rounded-full'>
                                <FontAwesomeIcon icon={faCircleDot} className='me-1' />
                                {job.job_type} / {job.work_mode}
                            </p>
                        </div>

                        {/* Dates */}
                        <div className='grid grid-cols-2 gap-10 text-sm my-6 border-t border-b border-gray-300
                        py-3'>
                            <div>
                                <p>Applied Date</p>
                                <p className='text-xs'>{ dayjs(job.applied_date).format('DD-MM-YYYY') }</p>
                            </div>
                            <div>
                                <p>Deadline</p>
                                <p className='text-xs text-red-700'>{ dayjs(job.deadline).format('DD-MM-YYYY') }</p>
                            </div>
                        </div>

                        {/* Buttons */}
                        {/* <div className='flex items-center justify-around gap-4 mt-8'>
                            
                            View button
                            <button
                            onClick={() => openJobDetail(job.jid)}
                            className='px-3 py-1 w-1/3 rounded border border-blue-500 hover:text-white hover:bg-blue-500'>
                                View
                            </button>

                            Update button
                            <button
                            onClick={() => updateJob(job.jid)}
                            className='px-3 py-1 w-1/3 rounded border border-green-500 hover:text-white hover:bg-green-500'>
                                Update
                            </button>

                            Delete button
                            <button
                            onClick={ () => onDelete(job) }
                            className='px-3 py-1 w-1/3 rounded border border-red-500 hover:text-white hover:bg-red-500'>
                                Delete
                            </button>
                        </div> */}
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default FavoriteJobs;
