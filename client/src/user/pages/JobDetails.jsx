import React, { startTransition, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserNavbar from '../components/UserNavbar'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

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
        <div className='px-6 md:px-12 lg:px-24 xl:px-32 my-10'>

          {/* Left Content */}
          <div className='flex items-start justify-between'>

            {/* Title, company & location */}
            <div>
              <h1 className='text-5xl font-bold'>{ job.job_title }</h1>
              <h2 className='text-3xl text-gray-700 my-2'>
                <FontAwesomeIcon icon={ faAt } /> { job.company_name }
              </h2>
              <h3 className='text-xl text-gray-600'>
                <FontAwesomeIcon icon={ faLocationDot } /> { job.location }
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
        </div>

    </div>
    </>
  )
}

export default JobDetails