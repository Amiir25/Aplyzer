import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserNavbar from '../components/UserNavbar'
import axios from 'axios';

const JobDetails = () => {

  const { jobId } = useParams();

  // Fetch job details
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/job-details/${jobId}`);
        console.log(response);
      } catch (error) {
        const errorMsg = error.response?.data?.message;
      }
    }
    fetchJobDetails();
  }, [jobId]);

  return (
    <>
    <div>
        
        <UserNavbar/>

        {/* Job Details */}
        <div>

          {/* --- */}
          <div>
            { jobId }
          </div>
        </div>

    </div>
    </>
  )
}

export default JobDetails