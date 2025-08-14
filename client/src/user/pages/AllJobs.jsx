import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { faCircleDot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import UserNavbar from '../components/UserNavbar';
import axios from 'axios';
import dayjs from 'dayjs';

const AllJobs = () => {

    const { userId } = useParams();
    const [jobs, setJobs] = useState([]);

    // Fech jobs
    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/jobs/${userId}`);
                setJobs(response.data.jobs);
            } catch (error) {
                const errorMsg = error.response?.data?.message;
            }
        }
        fetchAllJobs();
    }, [userId])

    // Favorite Jobs
    const [favourite, setFavourite] = useState({});
    const toogleFavorite = (id) => {
        setFavourite((prev) => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    const statusClasses = {
        Applied: 'bg-blue',
        Waiting: 'bg-yellow',
        Interviewed: 'bg-purple',
        Hired: 'bg-green',
        Rejected: 'bg-red',
        Quit: 'bg-gray',
    }

    console.log(jobs);

    return (
        <>
            <UserNavbar />

            <div className='px-6 md:px-12 lg:px-24 xl:px-32 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    jobs.map((job, i) => (
                            <div key={ i }
                                className='relative w-80 mt-10 pt-10 pb-2 px-4 shadow-lg rounded border border-gray-200'>

                                {/* Status */}
                                <p className={`absolute top-0 left-0 text-lg text-gray-100 font-medium px-2 py-1
                                ${ statusClasses[job.status] }`
                                }>
                                    {job.status}
                                </p>

                                {/* Star */}
                                <button
                                    onClick={() => toogleFavorite(job.jid)}
                                    className={`absolute top-1 right-1 text-lg text-gray-800 font-medium`}>
                                    <FontAwesomeIcon icon={favourite[job.jid] ? solidStar : regularStar}
                                        className={`${favourite[job.jid] && 'text-amber-500'}`} />
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
                                    <p className='text-xs bg-gray-200 px-2 py-1 text-fuchsia-800 rounded-full'>
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
                                <div className='flex items-center justify-around gap-4 mt-8'>
                                    
                                    {/* View button */}
                                    <Link to={`/user/job/${userId}`}
                                    className='text-center px-3 py-1 w-1/3 rounded border border-blue-500 hover:text-white hover:bg-blue-500'>
                                        View
                                    </Link>

                                    {/* Update button */}
                                    <button className='px-3 py-1 w-1/3 rounded border border-green-500 hover:text-white hover:bg-green-500'>
                                        Update
                                    </button>

                                    {/* Delete button */}
                                    <button className='px-3 py-1 w-1/3 rounded border border-red-500 hover:text-white hover:bg-red-500'>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default AllJobs;
