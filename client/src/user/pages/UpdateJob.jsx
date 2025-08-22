import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import UserNavbar from '../components/UserNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faCalendarCheck, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import dayjs from 'dayjs';

const UpdateJob = () => {

    const { jobId } = useParams();
    const navigate = useNavigate();

    // Form message
    const [formMsg, setFormMsg] = useState('');
    const [showFormMsg, setShowFormMsg] = useState(false);


    // Form validation
    const schema = yup.object().shape({
        company_name: yup
            .string()
            .required('Company name name is required'),
        job_title: yup
            .string()
            .required('Job title is required'),
        applied_date: yup
            .date()
            .transform((value, originalValue) => {
            return (originalValue === "" ? null : value) // Treat empty string as 'null'
            })
            .required('Applied date is required'),
        deadline: yup
            .date()
            .transform((value, originalValue) => {
            return (originalValue === "" ? null : value)
            })
            .required('Application deadline is required'),
        
        // ENUMs
        job_type: yup
            .string()
            .oneOf(['Full-time', 'Part-time', 'Internship', 'Contractual', 'Unknown'],
            'Select a valid job type'
            ),
        work_mode: yup
            .string()
            .oneOf(['Onsite', 'Remote', 'Hybrid', 'Unknown'],
            'Select a valid work mode'
            ),
        exp_level: yup
            .string()
            .oneOf(['Junior', 'Mid-level', 'Senior', 'Expert', 'Unknown'],
            'Select a valid experiance level'
            ),
        status: yup
            .string()
            .oneOf(['Applied', 'Waiting', 'Interviewed', 'Hired', 'Rejected', 'Quit'],
            'Select a valid job status'
            ),

        // Optional fields
        location: yup.string(),
        job_description: yup.string(),
        required_skills: yup.string(),
        favorite: yup.boolean(),
        more_info: yup.string(),
        post_link: yup.string().url("Must be a valid URL").nullable()
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    // Fetch job details and pre-fill form
    const [job, setJob] = useState();

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = (await axios.get(`http://localhost:3000/user/job-details/${jobId}`));
                const jobDetails = response.data.job;
                reset({
                    ...jobDetails,
                    applied_date: dayjs(jobDetails.applied_date).format('YYYY-MM-DD'),
                    deadline: dayjs(jobDetails.deadline).format('YYYY-MM-DD')
                });
            } catch (error) {
                console.log(error);
            }
        }
        fetchJob();
    }, [jobId]);

    // Form Submission
    const onSubmit = async (data) => {
        try {
            data.applied_date = dayjs(data.applied_date).format('YYYY-MM-DD');
            data.deadline = dayjs(data.deadline).format('YYYY-MM-DD');
            await axios.post(`http://localhost:3000/user/add-new-job/${userId}`, data);

            // Show success message for 3 seconds and navogate
            setShowFormMsg(true);
            setTimeout(() => {
            setShowFormMsg(false);
            !showFormMsg && navigate(`/user/all-jobs/${userId}`);
            }, 3000)

        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Something went wrong. Please try again.';

            // Show error message for 3 seconds
            setFormMsg(errorMsg);
            setShowFormMsg(true);
            setTimeout(() => {setShowFormMsg(false)}, 3000);
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
              <label htmlFor="job_title" className='block text-xl text-gray-800'>Job Title</label>
              <input id='job_title' type="text" placeholder='e.g. Software Engineer'
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('job_title') } />
              { errors.job_title && <p className='text-sm text-red-600'>{ errors.job_title.message }</p> }
            </div>
            {/* Company_name */}
            <div className='mb-4'>
              <label htmlFor="company_name" className='block text-xl text-gray-800'>Company_name</label>
              <input id='company_name' type="text" placeholder='e.g. Google'
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('company_name') } />
              { errors.company_name && <p className='text-sm text-red-600'>{ errors.company_name.message }</p> }
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
              <label className='block text-xl text-gray-800'>Job Type</label>
              <select {...register("job_type")} defaultValue=''
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'>
                <option value="" disabled hidden className='text-gray-300'>Select job type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
                <option value="Contractual">Contractual</option>
                <option value="Unknown">Unknown</option>
              </select>
              { errors.job_type && <p className='text-sm text-red-600'>{ errors.job_type.message }</p> }
            </div>
            {/* Work Mode */}
            <div className='mb-4'>
              <label className='block text-xl text-gray-800'>Work Mode</label>
              <select {...register("work_mode")} defaultValue=''
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'>
                <option value="" disabled hidden>Select work mode</option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Unknown">Unknown</option>
              </select>
              { errors.work_mode && <p className='text-sm text-red-600'>{ errors.work_mode.message }</p> }
            </div>
            {/* Experiance Level */}
            <div className='mb-4'>
              <label className='block text-xl text-gray-800'>Experiance Level</label>
              <select {...register("exp_level")} defaultValue=''
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'>
                <option value="" disabled hidden>Select experiance level</option>
                <option value="Junior">Junior</option>
                <option value="Mid-level">Mid-level</option>
                <option value="Senior">Senior</option>
                <option value="Expert">Expert</option>
                <option value="Unknown">Unknown</option>
              </select>
              { errors.exp_level && <p className='text-sm text-red-600'>{ errors.exp_level.message }</p> }
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
              <label htmlFor="applied_date" className='block text-xl text-gray-800'>Applied Date</label>
              <input id='applied_date' type="date"
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('applied_date') } />
              { errors.applied_date && <p className='text-sm text-red-600'>{ errors.applied_date.message }</p> }
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
              <label className='block text-xl text-gray-800'>Status</label>
              <select {...register("status")} defaultValue=''
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'>
                <option value="" disabled hidden>Select the current job status</option>
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
              <label htmlFor="job_description" className='block text-xl text-gray-800'>Job Description</label>
              <textarea id="job_description" rows="6" placeholder="Paste the full job description here..."
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('job_description') }></textarea>
              { errors.job_description && <p className='text-sm text-red-600'>{ errors.job_description.message }</p> }
            </div>
            {/* Required Skills */}
            <div className='mb-4'>
              <label htmlFor="required_skills" className='block text-xl text-gray-800'>Required Skills</label>
              <textarea id="required_skills" rows="6" placeholder="List skills, one per line or comma-separated"
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('required_skills') }></textarea>
              { errors.required_skills && <p className='text-sm text-red-600'>{ errors.required_skills.message }</p> }
            </div>
            {/* More Information / Notes */}
            <div className='mb-4'>
              <label htmlFor="more_info" className='block text-xl text-gray-800'>More Information / Notes</label>
              <textarea id="more_info" rows="1" placeholder="Add any additional notes here"
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('more_info') }></textarea>
              { errors.more_info && <p className='text-sm text-red-600'>{ errors.more_info.message }</p> }
            </div>
            {/* Job post link */}
            <div className='mb-4'>
              <label htmlFor="post_link" className='block text-xl text-gray-800'>Job Post Link</label>
              <input id='post_link' type="text" placeholder='e.g. Addis Ababa, Ethiopia'
              className='px-3 py-2 border border-gray-400 rounded w-full
              focus:bg-white focus:outline-none focus:border-white
              transform transition-all duration-500 ease-in-out'
              { ...register('post_link') } />
              { errors.post_link && <p className='text-sm text-red-600'>{ errors.post_link.message }</p> }
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

      {/* Form message */}
      <div className={`${ showFormMsg ? 'fixed' : 'hidden' } top-10 left-10 right-10 w-fit mx-auto
      transform transition-all duration-300`}>
        <p className={`${ formMsg ? 'bg-red-500' : 'bg-green-500' } 
        text-white text-2xl font-medium px-8 py-4 rounded-xl`}>
          { formMsg || 'Job Updated Successfully' }
        </p>
      </div>

    </div>
    </>
  )
}

export default UpdateJob