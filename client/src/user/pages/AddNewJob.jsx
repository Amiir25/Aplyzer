import React from 'react'
import UserNavbar from '../components/UserNavbar';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faCalendarCheck, faSuitcase, faSuitcaseMedical, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AddNewJob = () => {
  const { userId } = useParams();

  // Form validation
  const schema = yup.object().shape({
    company_name: yup
      .string()
      .required('Company name is required'),
    job_title: yup
      .string()
      .required('Job title is required'),
    applied_date: yup
      .date()
      .required('Applied date is required'),
    deadline: yup
      .date()
      .required('Application deadline is required'),
    
    // ENUMs
    exp_level: yup
      .string()
      .oneOf(['Junior', 'Mid-level', 'Senior', 'Expert', 'Unknown']),
    job_type: yup
      .string()
      .oneOf(['Full-time', 'Part-time', 'Internship', 'Contractual', 'Unknown']),
    work_mode: yup
      .string()
      .oneOf(['Onsite', 'Remote', 'Hybrid', 'Unknown']),
    status: yup
      .string()
      .oneOf(['Applied', 'Waiting', 'Interviewed', 'Hired', 'Rejected', 'Quit']),

    // Optional fields
    location: yup.string(),
    job_description: yup.string(),
    required_skills: yup.string(),
    favorite: yup.boolean(),
    more_info: yup.string(),
    postLink: yup.string().url("Must be a valid URL").nullable()
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // Form Submission
  const onSubmit = async (data) => {
    try {
      // await axios.post(`http://localhost:3000/user/add-new-job/${userId}`, data);
      console.log(data);
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Something went wrong. Please try again.';
    }
  }

  return (
    <>
    <UserNavbar/>

    <div className='px-6 md:px-12 lg:px-24 xl:px-32 my-20'>
      <h1 className='text-2xl md:text-5xl text-center font-bold mb-10'>Capture New Job Opportunity</h1>

      <form onSubmit={ handleSubmit(onSubmit) }>
        
        {/* Job Essentials */}
        <section className='px-10 py-4 my-10 bg-gray-100 rounded-xl'>
          <h1 className='text-2xl font-medium mb-10'>
            <FontAwesomeIcon icon={ faSuitcase } className='text-purple-500' />
            <span> Job Essentials</span>
          </h1>

          <div className='grid grid-col-1 md:grid-cols-2 gap-x-20'>
            {/* Job title */}
            <div className='mb-4'>
              <label htmlFor="jobTitle" className='block text-xl text-gray-800'>Job Title</label>
              <input id='jobTitle' type="text" placeholder='e.g. Software Engineer'
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('jobTitle') } />
              { errors.jobTitle && <p className='text-sm text-red-600'>{ errors.jobTitle.message }</p> }
            </div>
            {/* Company */}
            <div className='mb-4'>
              <label htmlFor="company" className='block text-xl text-gray-800'>Company</label>
              <input id='company' type="text" placeholder='e.g. Google'
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('company') } />
              { errors.company && <p className='text-sm text-red-600'>{ errors.company.message }</p> }
            </div>
            {/* Location */}
            <div className='mb-4'>
              <label htmlFor="location" className='block text-xl text-gray-800'>Location</label>
              <input id='location' type="text" placeholder='e.g. Addis Ababa, Ethiopia'
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('location') } />
              { errors.location && <p className='text-sm text-red-600'>{ errors.location.message }</p> }
            </div>
            {/* Job type */}
            <div className='mb-4'>
              <label htmlFor="jobType" className='block text-xl text-gray-800'>Job Type</label>
              <select {...register("status")}
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'>
                <option value="" disabled selected hidden>Select work mode</option>
                <option value="Applied">Full-time</option>
                <option value="Waiting">Part-time</option>
                <option value="Interviewed">Internship</option>
                <option value="Quit">Contractual</option>
                <option value="Quit">Unknown</option>
              </select>
              { errors.jobType && <p className='text-sm text-red-600'>{ errors.jobType.message }</p> }
            </div>
            {/* Work Mode */}
            <div className='mb-4'>
              <label className='block text-xl text-gray-800'>Work Mode</label>
              <select {...register("status")}
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'>
                <option value="" disabled selected hidden>Select work mode</option>
                <option value="Applied">Onsite</option>
                <option value="Waiting">Remote</option>
                <option value="Interviewed">Hybrid</option>
                <option value="Quit">Unknown</option>
              </select>
              { errors.workMode && <p className='text-sm text-red-600'>{ errors.workMode.message }</p> }
            </div>
            {/* Experiance Level */}
            <div className='mb-4'>
              <label className='block text-xl text-gray-800'>Experiance Level</label>
              <select {...register("status")}
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'>
                <option value="" disabled selected hidden>Select experiance level</option>
                <option value="Applied">Junior</option>
                <option value="Waiting">Mid-level</option>
                <option value="Interviewed">Senior</option>
                <option value="Hired">Expert</option>
                <option value="Quit">Unknown</option>
              </select>
              { errors.status && <p className='text-sm text-red-600'>{ errors.status.message }</p> }
            </div>
          </div>
        </section>

        {/* Timeline & Status */}
        <section className='px-10 py-4 my-10 bg-gray-100 rounded-xl'>
          <h1 className='text-2xl font-medium mb-10'>
            <FontAwesomeIcon icon={ faCalendarCheck } className='text-purple-500' />
            <span> Timeline & Status</span>
          </h1>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20'>
            {/* Applied Date */}
            <div className='mb-4'>
              <label htmlFor="appliedDate" className='block text-xl text-gray-800'>Applied Date</label>
              <input id='appliedDate' type="date"
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('appliedDate') } />
              { errors.appliedDate && <p className='text-sm text-red-600'>{ errors.appliedDate.message }</p> }
            </div>
            {/* Deadline */}
            <div className='mb-4'>
              <label htmlFor="deadline" className='block text-xl text-gray-800'>Deadline</label>
              <input id='deadline' type="date"
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('deadline') } />
              { errors.deadline && <p className='text-sm text-red-600'>{ errors.deadline.message }</p> }
            </div>
            {/* Status */}
            <div className='mb-4'>
              <label htmlFor="status" className='block text-xl text-gray-800'>Status</label>
              <select {...register("status")}
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'>
                <option value="" disabled selected hidden>Select the current job status</option>
                <option value="Applied">Applied</option>
                <option value="Waiting">Waiting</option>
                <option value="Interviewed">Interviewed</option>
                <option value="Hired">Hired</option>
                <option value="Rejected">Rejected</option>
                <option value="Quit">Quit</option>
              </select>
              { errors.status && <p className='text-sm text-red-600'>{ errors.status.message }</p> }
            </div>
          </div>
        </section>

        {/* Description & Notes */}
        <section className='px-10 py-4 my-10 bg-gray-100 rounded-xl'>
          <h1 className='text-2xl font-medium mb-10'>
            <FontAwesomeIcon icon={ faAlignLeft } className='text-purple-500' />
            <span> Description & Notes</span>
          </h1>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20'>
            {/* Job Description */}
            <div className='mb-4'>
              <label htmlFor="jobDesc" className='block text-xl text-gray-800'>Job Description</label>
              <textarea id="jobDesc" rows="6" placeholder="Paste the full job description here..."
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('jobDesc') }></textarea>
              { errors.jobDesc && <p className='text-sm text-red-600'>{ errors.jobDesc.message }</p> }
            </div>
            {/* Required Skills */}
            <div className='mb-4'>
              <label htmlFor="reqSkills" className='block text-xl text-gray-800'>Required Skills</label>
              <textarea id="reqSkills" rows="6" placeholder="List skills, one per line or comma-separated"
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('reqSkills') }></textarea>
              { errors.reqSkills && <p className='text-sm text-red-600'>{ errors.reqSkills.message }</p> }
            </div>
            {/* More Information / Notes */}
            <div className='mb-4'>
              <label htmlFor="moreInfo" className='block text-xl text-gray-800'>More Information / Notes</label>
              <textarea id="moreInfo" rows="1" placeholder="Add any additional notes here"
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('moreInfo') }></textarea>
              { errors.moreInfo && <p className='text-sm text-red-600'>{ errors.moreInfo.message }</p> }
            </div>
            {/* Job post link */}
            <div className='mb-4'>
              <label htmlFor="postLink" className='block text-xl text-gray-800'>Job Post Link</label>
              <input id='postLink' type="text" placeholder='e.g. Addis Ababa, Ethiopia'
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('postLink') } />
              { errors.postLink && <p className='text-sm text-red-600'>{ errors.postLink.message }</p> }
            </div>
          </div>
        </section>

        {/* Favorite */}
        <div className='mb-4 flex items-center justify-center'>
          <input type="checkbox" id='favorite'
          className='h-5 w-5 mx-2'
          { ...register('favorite') } />
          <label htmlFor="favorite" className='text-xl text-gray-800'>Mark as Favorite</label>
          <FontAwesomeIcon icon={ faHeart } className='mx-2 text-red-500' />
          { errors.favorite && <p className='text-sm text-red-600'>{ errors.favorite.message }</p> }
        </div>
        
        {/* Submit & Cancel Buttons */}
        <div className='flex items-center justify-end gap-6 mt-20'>
          {/* Submit */}
          <input type="submit" value='Add'
          className='w-40 bg-gradient-to-r from-indigo-500 to-purple-800 text-white text-xl font-medium
          px-12 py-3 rounded cursor-pointer hover:from-indigo-700 hover:to-purple-800
          transform transition-all duration-300 ' />

          {/* Cancel */}
          <input type='reset' value='Cancel'
          className='w-40 bg-gradient-to-r from-rose-500 to-red-700 text-white text-xl font-medium
          px-12 py-3 rounded cursor-pointer hover:from-rose-700 hover:to-red-700
          transform transition-all duration-200 ease-in-out'/>
            {/* Cancel
          </button> */}
        </div>
      </form>

    </div>
    </>
  )
}

export default AddNewJob
