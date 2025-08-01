import React, { useState } from 'react'
import { faCircleDot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import UserNavbar from './UserNavbar';

const Jobs = () => {

    const Jobs = [
        {
            id: 1,
            status: 'Applied',
            title: 'Intern Deeveloper',
            company: 'Afroel Tech',
            location: 'Addis Ababa',
            type: 'Internship',
            mode: 'Remote',
            applied: '27/Jul/2025',
            deadline: '01/Aug/2025'
        },
        {
            id: 2,
            status: 'Interviwed',
            title: 'Intern Deeveloper',
            company: 'Afroel Tech',
            location: 'Addis Ababa',
            type: 'Internship',
            mode: 'Remote',
            applied: '27/Jul/2025',
            deadline: '01/Aug/2025'
        },
        {
            id: 3,
            status: 'Applied',
            title: 'Intern Deeveloper',
            company: 'Afroel Tech',
            location: 'Addis Ababa',
            type: 'Internship',
            mode: 'Remote',
            applied: '27/Jul/2025',
            deadline: '01/Aug/2025'
        },
        {
            id: 4,
            status: 'Interviwed',
            title: 'Intern Deeveloper',
            company: 'Afroel Tech',
            location: 'Addis Ababa',
            type: 'Internship',
            mode: 'Remote',
            applied: '27/Jul/2025',
            deadline: '01/Aug/2025'
        },
        {
            id: 5,
            status: 'Rejected',
            title: 'Intern Deeveloper',
            company: 'Afroel Tech',
            location: 'Addis Ababa',
            type: 'Internship',
            mode: 'Remote',
            applied: '27/Jul/2025',
            deadline: '01/Aug/2025'
        },
        {
            id: 6,
            status: 'Applied',
            title: 'Intern Deeveloper',
            company: 'Afroel Tech',
            location: 'Addis Ababa',
            type: 'Internship',
            mode: 'Remote',
            applied: '27/Jul/2025',
            deadline: '01/Aug/2025'
        },
        {
            id: 7,
            status: 'Applied',
            title: 'Intern Deeveloper',
            company: 'Afroel Tech',
            location: 'Addis Ababa',
            type: 'Internship',
            mode: 'Remote',
            applied: '27/Jul/2025',
            deadline: '01/Aug/2025'
        },
        {
            id: 8,
            status: 'Applied',
            title: 'Intern Deeveloper',
            company: 'Afroel Tech',
            location: 'Addis Ababa',
            type: 'Internship',
            mode: 'Remote',
            applied: '27/Jul/2025',
            deadline: '01/Aug/2025'
        },
        {
            id: 9,
            status: 'Rejected',
            title: 'Intern Deeveloper',
            company: 'Afroel Tech',
            location: 'Addis Ababa',
            type: 'Internship',
            mode: 'Remote',
            applied: '27/Jul/2025',
            deadline: '01/Aug/2025'
        },
        {
            id: 10,
            status: 'Interviwed',
            title: 'Intern Deeveloper',
            company: 'Afroel Tech',
            location: 'Addis Ababa',
            type: 'Internship',
            mode: 'Remote',
            applied: '27/Jul/2025',
            deadline: '01/Aug/2025'
        },
    ];

    const [favourite, setFavourite] = useState({});

    const toogleFavorite = (id) => {
        setFavourite((prev) => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    return (
        <>
        <UserNavbar/>
        
        <div className='px-6 md:px-12 lg:px-24 xl:px-32 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                Jobs.map((job, i) => {
                    
                    return (
                        <div key={ job.id }
                        className='relative w-80 mt-10 pt-10 pb-2 px-4 shadow-lg rounded border border-gray-200'>
                        
                            {/* Status */}
                            <p 
                            className={`absolute -top-0.5 -left-0.5 text-lg text-gray-100 font-medium px-2 py-1
                                ${ job.status === 'Applied' && 'bg-blue' }
                                ${ job.status === 'Interviwed' && 'bg-green' }
                                ${ job.status === 'Rejected' && 'bg-red' }`} >
                                { job.status }
                            </p>

                            {/* Star */}
                            <button
                            onClick={ () => toogleFavorite(job.id) }
                            className={`absolute top-1 right-1 text-lg text-gray-800 font-medium`}>
                                <FontAwesomeIcon icon={ favourite[job.id] ? solidStar : regularStar }
                                className={`${ favourite[job.id] && 'text-amber-500' }`} />
                            </button>

                            <h1 className='text-2xl md:text-3xl font-bold'>{ job.title }</h1>
                            
                            {/* --- */}
                            <div className='flex items-center justify-between'>
                                <div className='text-gray-700'>
                                    <p className='text-lg md:text-xl'>{ job.company }</p>
                                    <p className='text-sm'>
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
                            <div className='grid grid-cols-2 gap-10 text-sm my-6 border-t border-b border-gray-300
                                py-3'>
                                <div>
                                    <p>Applied Date</p>
                                    <p className='text-xs'>{ job.applied }</p>
                                </div>
                                <div>
                                    <p>Deadline</p>
                                    <p className='text-xs text-red-700'>{ job.deadline }</p>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className='flex items-center justify-around gap-4 mt-8'>
                                <button className='px-3 py-1 w-1/3 rounded border border-blue-500 hover:text-white hover:bg-blue-500'>
                                    View
                                </button>
                                <button className='px-3 py-1 w-1/3 rounded border border-green-500 hover:text-white hover:bg-green-500'>
                                    Update
                                </button>
                                <button className='px-3 py-1 w-1/3 rounded border border-red-500 hover:text-white hover:bg-red-500'>
                                    Delete
                                </button>
                            </div>
                        </div>
                    )

                })
            }
        </div>
        </>
    )
}

export default Jobs;
