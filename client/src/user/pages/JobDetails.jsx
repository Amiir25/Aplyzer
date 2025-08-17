import React, { startTransition, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserNavbar from '../components/UserNavbar'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import dayjs from 'dayjs';

const JobDetails = () => {

  const { jobId } = useParams();
  const [job, setJob] = useState({});

  // Fetch job details
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/job-details/${jobId}`);
        setJob(response.data.job);
      } catch (error) {
        const errorMsg = error.response?.data?.message;
      }
    }
    fetchJobDetails();
  }, [jobId]);

  // Favorite job
  const [favorite, setFavorite] = useState(0);

  return (
    <>
    <div>
        
        <UserNavbar/>

        {/* Job Details */}
        <div className='px-6 md:px-24 lg:px-48 xl:px-60 my-20'>

          {/* --- */}
          <div className='flex items-start justify-between pb-6 border-b border-gray-300'>

            {/* Title, company & location */}
            <div>
              <h1 className='text-5xl font-bold'>{ job.job_title }</h1>
              <h2 className='text-3xl text-gray-700 my-2'>
                <FontAwesomeIcon icon={ faAt } /> { job.company_name }
              </h2>
              <h3 className='text-xl text-gray-600'>
                <FontAwesomeIcon icon={ faLocationDot } /> { job.location}
              </h3>
            </div>

            {/* Favorite & status */}
            <div className='flex items-center gap-4 mt-2'>
              <FontAwesomeIcon icon={ favorite ? solidStar : regularStar }
              onClick={() => setFavorite(!favorite)}
              className={`${favorite && 'text-amber-500'} text-2xl`} />

              <h2 className='text-2xl'>{ job.status }</h2>
            </div>

          </div>

          {/* --- */}
          <div className='flex flex-col md:flex-row items-start justify-between mt-6 pb-6 border-b border-gray-300'>
            {/* Type, mode, level & skills */}
            <div>
              {/* Job Type */}
              <p className='text-xl text-gray-800 mb-1'>
                Job Type:
                <span className='font-semibold text-black'> { job.job_type }</span>
              </p>
              {/* Work Mode */}
              <p className='text-xl text-gray-800 mb-1'>
                Work Mode:
                <span className='font-semibold text-black'> { job.work_mode }</span>
              </p>
              {/* Experiance Level */}
              <p className='text-xl text-gray-800 mb-1'>
                Experiance Level:
                <span className='font-semibold text-black'> { job.exp_level }</span>
              </p>
              {/* Required Skills */}
              <p className='text-xl text-gray-800 mb-1'>
                Required Skills:
                <span className='font-semibold text-black'> { job.required_skills }</span>
              </p>
            </div>

            {/* Dates */}
            <div>
              {/* Applied Date */}
              <p className='text-xl text-gray-800 mb-1'>
                Applied Date:
                <span className='font-semibold text-black'> { dayjs(job.applied_date).format('DD-MM-YYYY') }</span>
              </p>
              {/* Application Deadline */}
              <p className='text-xl text-gray-800 mb-1'>
                Application Deadline:
                <span className='font-semibold text-red-700'> { dayjs(job.deadline).format('DD-MM-YYYY') }</span>
              </p>
            </div>
            
          </div>

          {/* Job Description */}
          <div className='my-4'>
            <h1 className='text-xl text-gray-800 font-bold mb-1'>Job Description</h1>
            <p>{ job.job_description }</p>
          </div>

          {/* More Info */}
          <div className='mb-4'>
            <h1 className='text-xl text-gray-800 font-bold mb-1'>More Info.</h1>
            <p>{ job.more_info }</p>
          </div>

        </div>

    </div>
    </>
  )
}

export default JobDetails