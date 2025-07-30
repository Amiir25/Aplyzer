import React from 'react'
import { faCircleDot, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Jobs = [
        {
            status: 'Deadline Upcoming',
            title: 'Intern Deeveloper',
            company: 'Afroel Tech',
            location: 'Addis Ababa',
            type: 'Internship',
            mode: 'Remote',
            applied: '27/Jul/2025',
            deadline: '01/Aug/2025',
            button: 'Review application'
        },
        {
            status: 'Interview Scheduled',
            title: 'Intern Deeveloper',
            company: 'Afroel Tech',
            location: 'Addis Ababa',
            type: 'Internship',
            mode: 'Remote',
            applied: '27/Jul/2025',
            deadline: '01/Aug/2025',
            button: 'Prepare for interview'
        },
        {
            status: 'Follow-up Reminder',
            title: 'Intern Deeveloper',
            company: 'Afroel Tech',
            location: 'Addis Ababa',
            type: 'Internship',
            mode: 'Remote',
            applied: '27/Jul/2025',
            deadline: '01/Aug/2025',
            button: 'Send follow-up email'
        },
];

const GetReady = () => {
  return (
    <>
    <div className='px-6 md:px-12 lg:px-24 xl:px-32 my-20'>

        <h1 className='text-2xl md:text-4xl font-semibold mb-10'>Get Ready</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {
                Jobs.map((job, i) => (
                    <div className={`relative w-80 h-74 mt-10 py-2 px-4 shadow-lg rounded
                        ${ job.status.includes('Deadline') && 'border-l-4 border-red-500' }
                        ${ job.status.includes('Interview') && 'border-l-4 border-green-500' }
                        ${ job.status.includes('Follow-up') && 'border-l-4 border-blue-500' }`}>
                        
                        {/* Status */}
                        <p 
                        className={`text-lg font-medium py-1 font-bold text-xl md:text-3xl mb-2
                            ${ job.status.includes('Deadline') && 'text-red-500' }
                            ${ job.status.includes('Interview') && 'text-green-500' }
                            ${ job.status.includes('Follow-up') && 'text-blue-500' }`} >
                            { job.status }
                        </p>

                        <h1 className='md:text-xl font-bold'>{ job.title }</h1>
                        
                        {/* --- */}
                        <div className='flex items-center justify-between'>
                            <div className='text-gray-700'>
                                <p className=''>{ job.company }</p>
                                <p className='text-xs'>
                                    <FontAwesomeIcon icon={ faLocationDot } className='me-1' />
                                    { job.location }
                                </p>
                            </div>
                            <p className='text-xs bg-gray-200 px-2 py-1 text-fuchsia-800 rounded-full'>
                                <FontAwesomeIcon icon={ faCircleDot } className='me-1' />
                                { job.type } / { job.mode }
                            </p>
                        </div>

                        {/* Dates */}
                        <div className='text-sm my-6 border-t border-b border-gray-300
                            py-3'>
                            <div className='grid grid-cols-2 gap-10 my-2'>
                                <p className='font-medium'>Deadline</p>
                                <p className='text-xs'>{ job.applied }</p>
                            </div>
                            <div className='grid grid-cols-2 gap-10 my-2'>
                                <p className='font-medium'>Remaining</p>
                                <p className='text-sm text-red-500 font-bold'>6 days</p>
                            </div>
                        </div>

                        {/* Button */}
                        <button className={`absolute bottom-0 left-0 right-0 py-1 mt-8 text-white
                            ${ job.status.includes('Deadline') && 'bg-red-500' }
                            ${ job.status.includes('Interview') && 'bg-green-500' }
                            ${ job.status.includes('Follow-up') && 'bg-blue-500' } `}>
                            { job.button }
                        </button>
                    </div>
                ))
            }

        </div>
    </div>
    </>
  )
}

export default GetReady
