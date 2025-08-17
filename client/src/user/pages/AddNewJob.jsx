import React from 'react'
import UserNavbar from '../components/UserNavbar';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const AddNewJob = () => {

  // Form validation
  const schema = yup.object().shape({
    jobTitle: yup
      .string()
      .required('Job title is required'),
    company: yup
      .string()
      .required('Company name is required'),
    location: yup
      .string()
      .required('Location is required'),
    jobType: yup
      .string()
      .required('Job type is required'),
    jobDesc: yup
      .string()
      .required('Job Description is required'),
    workMode: yup
      .string()
      .required('Work mode is required'),
    expLevel: yup
      .string()
      .required('Experiance Level is required'),
    reqSkills: yup
      .string()
      .required('Required skills is required'),
    appliedDate: yup
      .string()
      .required('Applied date is required'),
    deadline: yup
      .string()
      .required('Application deadline is required'),
    postLink: yup
      .string()
      .required('Job post link is required'),
    moreInfo: yup
      .string()
      .required('More Information is required'),
    favorite: yup
      .string()
      .required('favorite is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // Form Submission
  const onSubmit = async (data) => {

  }

  return (
    <>
    <UserNavbar/>

    <div className='px-6 md:px-12 lg:px-24 xl:px-32 my-20'>
      <h1 className='text-2xl md:text-4xl font-semibold mb-10'>Add New Job Application</h1>

      <form onSubmit={ handleSubmit(onSubmit) }>
        
        <div className='grid grid-col-1 md:grid-cols-2 gap-x-20'>
          {/* Job title */}
          <div className='mb-4'>
            <label htmlFor="jobTitle" className='block text-lg md:text-2xl text-gray-800'>Job Title</label>
            <input id='jobTitle' type="text" placeholder='e.g. Software Engineer'
            className='px-3 py-2 border border-gray-400 rounded w-full'
            { ...register('jobTitle') } />
            { errors.jobTitle && <p className='text-sm text-red-600'>{ errors.jobTitle.message }</p> }
          </div>
          {/* Company */}
          <div className='mb-4'>
            <label htmlFor="company" className='block text-lg md:text-2xl text-gray-800'>Company</label>
            <input id='company' type="text" placeholder='e.g. Google'
            className='px-3 py-2 border border-gray-400 rounded w-full'
            { ...register('company') } />
            { errors.company && <p className='text-sm text-red-600'>{ errors.company.message }</p> }
          </div>
          {/* Location */}
          <div className='mb-4'>
            <label htmlFor="location" className='block text-lg md:text-2xl text-gray-800'>Location</label>
            <input id='location' type="text" placeholder='e.g. Addis Ababa, Ethiopia'
            className='px-3 py-2 border border-gray-400 rounded w-full'
            { ...register('location') } />
            { errors.location && <p className='text-sm text-red-600'>{ errors.location.message }</p> }
          </div>
          {/* Job type */}
          <div className='mb-4'>
            <label htmlFor="jobType" className='block text-lg md:text-2xl text-gray-800'>Job Type</label>
            <input id='jobType' type="text" list='jobTypeList' placeholder='Select job type'
            className='px-3 py-2 border border-gray-400 rounded w-full'
            { ...register('jobType') } />
            <datalist id='jobTypeList'>
              <option value="Full-time"></option>
              <option value="Part-time"></option>
              <option value="Internship"></option>
              <option value="Contractual"></option>
              <option value="Unknown"></option>
            </datalist>
            { errors.jobType && <p className='text-sm text-red-600'>{ errors.jobType.message }</p> }
          </div>
          {/* Work Mode */}
          <div className='mb-4'>
            <label htmlFor="workMode" className='block text-lg md:text-2xl text-gray-800'>Work Mode</label>
            <input id='workMode' type="text" list='workModeList' placeholder='Select work mode'
            className='px-3 py-2 border border-gray-400 rounded w-full'
            { ...register('workMode') } />
            <datalist id='workModeList'>
              <option value="Onsite"></option>
              <option value="Remote"></option>
              <option value="Hybrid"></option>
              <option value="Unknown"></option>
            </datalist>
            { errors.workMode && <p className='text-sm text-red-600'>{ errors.jobType.message }</p> }
          </div>
          {/* Experiance Level */}
          <div className='mb-4'>
            <label htmlFor="expLevel" className='block text-lg md:text-2xl text-gray-800'>Experiance Level</label>
            <input id='expLevel' type="text" list='expLevelList' placeholder='Select experiance level'
            className='px-3 py-2 border border-gray-400 rounded w-full'
            { ...register('expLevel') } />
            <datalist id='expLevelList'>
              <option value="Onsite"></option>
              <option value="Remote"></option>
              <option value="Hybrid"></option>
              <option value="Unknown"></option>
            </datalist>
            { errors.expLevel && <p className='text-sm text-red-600'>{ errors.jobType.message }</p> }
          </div>
          {/* Applied Date */}
          <div className='mb-4'>
            <label htmlFor="appliedDate" className='block text-lg md:text-2xl text-gray-800'>Applied Date</label>
            <input id='appliedDate' type="date"
            className='px-3 py-2 border border-gray-400 rounded w-full'
            { ...register('appliedDate') } />
            { errors.appliedDate && <p className='text-sm text-red-600'>{ errors.appliedDate.message }</p> }
          </div>
          {/* Deadline */}
          <div className='mb-4'>
            <label htmlFor="deadline" className='block text-lg md:text-2xl text-gray-800'>Deadline</label>
            <input id='deadline' type="date"
            className='px-3 py-2 border border-gray-400 rounded w-full'
            { ...register('deadline') } />
            { errors.deadline && <p className='text-sm text-red-600'>{ errors.deadline.message }</p> }
          </div>
          {/* Job post link */}
          <div className='mb-4'>
            <label htmlFor="postLink" className='block text-lg md:text-2xl text-gray-800'>Job Post Link</label>
            <input id='postLink' type="text" placeholder='e.g. Addis Ababa, Ethiopia'
            className='px-3 py-2 border border-gray-400 rounded w-full'
            { ...register('postLink') } />
            { errors.postLink && <p className='text-sm text-red-600'>{ errors.postLink.message }</p> }
          </div>
          {/* More Information / Notes */}
          <div className='mb-4'>
            <label htmlFor="moreInfo" className='block text-lg md:text-2xl text-gray-800'>More Information / Notes</label>
            <textarea id="moreInfo" rows="1" placeholder="Add any additional notes here"
            className='px-3 py-2 border border-gray-400 rounded w-full'
            { ...register('moreInfo') }></textarea>
            { errors.moreInfo && <p className='text-sm text-red-600'>{ errors.moreInfo.message }</p> }
          </div>
          {/* Required Skills */}
          <div className='mb-4'>
            <label htmlFor="reqSkills" className='block text-lg md:text-2xl text-gray-800'>Required Skills</label>
            <textarea id="reqSkills" rows="6" placeholder="List skills, one per line or comma-separated"
            className='px-3 py-2 border border-gray-400 rounded w-full'
            { ...register('reqSkills') }></textarea>
            { errors.reqSkills && <p className='text-sm text-red-600'>{ errors.reqSkills.message }</p> }
          </div>
          {/* Job Description */}
          <div className='mb-4'>
            <label htmlFor="jobDesc" className='block text-lg md:text-2xl text-gray-800'>Job Description</label>
            <textarea id="jobDesc" rows="6" placeholder="Paste the full job description here..."
            className='px-3 py-2 border border-gray-400 rounded w-full'
            { ...register('jobDesc') }></textarea>
            { errors.jobDesc && <p className='text-sm text-red-600'>{ errors.jobDesc.message }</p> }
          </div>
          {/* Favorite */}
          <div className='mb-4'>
            <input type="checkbox" id='favorite'
            className='px-3 py-2 border border-gray-400 rounded mx-2'
            { ...register('favorite') } />
            <label htmlFor="favorite" className='text-lg md:text-2xl text-gray-800'>Mark As Favorite</label>
            { errors.favorite && <p className='text-sm text-red-600'>{ errors.favorite.message }</p> }
          </div>
        
        </div>

        {/* Submit & Cancel Buttons */}
        <div className='flex items-center gap-4 justify-end'>
          {/* Submit */}
          <input type="submit" value='Add'
          className='bg-gradient-main text-white px-4 py-1 rounded cursor-pointer
          hover:scale-102 hover:opacity-90 transform transition-all duration-200 ease-in-out' />

          {/* Cancel */}
          <button className='text-white bg-red-700 px-4 py-1 rounded cursor-pointer
          hover:scale-102 hover:opacity-85 transform transition-all duration-200 ease-in-out'>
            Cancel
          </button>
        </div>
      </form>

    </div>
    </>
  )
}

export default AddNewJob
