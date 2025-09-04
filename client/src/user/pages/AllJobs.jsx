import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { faCircleDot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import UserNavbar from '../components/UserNavbar';
import axios from 'axios';
import dayjs from 'dayjs';
import DeleteJob from '../components/DeleteJob';

const AllJobs = () => {

    const navigate = useNavigate();
    const { userId } = useParams();

    const [allJobs, setAllJobs] = useState([]);
    const [favorite, setFavorite] = useState({});

    // Fech jobs
    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/all-jobs/${userId}`);
                const jobs = response.data.jobs;
                setAllJobs(jobs);

                // Initial favorite state
                const favoriteState = {};
                jobs.forEach((job) => {
                    favoriteState[job.jid] = job.favorite;
                })
                setFavorite(favoriteState);

            } catch (error) {
                const errorMsg = error.response?.data?.message;
            }
        }
        fetchAllJobs();
    }, [userId])

    
    // Update Favorite Job
    const toggleFavorite = async (id) => {
        // Update UI
        setFavorite((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))

        // Update DB
        await axios.patch(`http://localhost:3000/user/favorite/${id}`, {
            favorite: !favorite[id],
        })
        .catch(() => {
            // rollback UI if request fails
            setFavorite((prev) => ({
                ...prev,
                [id]: prev[id],
            }))
        })
    }

    // Colors for job status
    const statusColor = {
        Applied: 'from-sky-800 to-sky-500',
        Waiting: 'from-yellow-800 to-yellow-500',
        Interviewed: 'from-purple-800 to-purple-500',
        Hired: 'from-green-800 to-green-500',
        Rejected: 'from-red-800 to-red-500',
        Quit: 'from-gray-800 to-gray-500',
    }

    // Open job details page
    const openJobDetail = (jid) => {
        window.open(`/user/job-details/${jid}`, '_blank', 'noopener,noreferrer');
    }

    // Update Job
    const updateJob = (jid) => {
        navigate(`/user/update-job/${jid}`);
    }

    // Handle job deletion
    const [selectedJob, setSelectedJob] = useState(null);

    const onDelete = (job) => {
        setSelectedJob(job);
    }

    const handlePopupClose = () => {
        setSelectedJob(null);
    }

    const handleDelete = () => {
        setSelectedJob(null);
        window.location.reload();
    }

    selectedJob &&
    <DeleteJob 
        job_title={ selectedJob.job_title }
        company_name={ selectedJob.company_name }
        onClose = { handlePopupClose }
        onDelete = { handleDelete } />

    return (
        <>
            <UserNavbar />

            <div className='px-6 md:px-12 lg:px-24 xl:px-32'>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 my-20'>
                    {
                        allJobs.map((job, i) => (
                            <div key={ i }
                                className='relative m-2 pt-10 pb-2 px-4 shadow shadow-gray-900 rounded'>

                                {/* Status */}
                                <p className={`absolute top-0 left-0 text-lg text-gray-100 font-medium px-2 py-1 bg-ora
                                bg-gradient-to-r ${ statusColor[job.status] }`
                                }>
                                    {job.status}
                                </p>

                                {/* Star */}
                                <button
                                    onClick={() => toggleFavorite(job.jid)}
                                    className={`absolute top-1 right-1 text-lg text-gray-800 font-medium`}>
                                    <FontAwesomeIcon icon={favorite[job.jid] ? solidStar : regularStar}
                                        className={`${favorite[job.jid] && 'text-orange-500'}`} />
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
                                <div className='flex items-center justify-around gap-4 mt-8'>
                                    
                                    {/* View button */}
                                    <button
                                    onClick={() => openJobDetail(job.jid)}
                                    className='px-3 py-1 w-1/3 rounded border border-blue-500 hover:text-white hover:bg-blue-500'>
                                        View
                                    </button>

                                    {/* Update button */}
                                    <button
                                    onClick={() => updateJob(job.jid)}
                                    className='px-3 py-1 w-1/3 rounded border border-green-500 hover:text-white hover:bg-green-500'>
                                        Update
                                    </button>

                                    {/* Delete button */}
                                    <button
                                    onClick={ () => onDelete(job) }
                                    className='px-3 py-1 w-1/3 rounded border border-red-500 hover:text-white hover:bg-red-500'>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    }

                    {/* Delete Job */}
                    {
                        selectedJob &&
                        <DeleteJob
                            jobId = { selectedJob.jid }
                            job_title={ selectedJob.job_title }
                            company_name={ selectedJob.company_name }
                            onClose = { handlePopupClose }
                            onDelete = { handleDelete } />
                    }
                </div>

                {/* Add new job Button */}
                <button className='my-10 text-xl text-white px-8 py-4 rounded-lg bg-gradient-to-r from-blue-900 to-blue-500 hover
                hover:opacity-90 cursor-pointer active:opacity-100'>
                    <Link to={`/user/add-new-job/${userId}`}>
                        Add new job
                    </Link>
                </button>
            </div>
        </>
    )
}

export default AllJobs;
