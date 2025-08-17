import React from 'react'
import UserNavbar from '../components/UserNavbar';
import * as yup from 'yup';

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
    moreInfo: yup
      .string()
      .required('More Information is required'),
  })

  return (
    <>
    <UserNavbar/>

    <div className='px-6 md:px-12 lg:px-24 xl:px-32 my-20'>
      <h1 className='text-2xl md:text-4xl font-semibold mb-10'>Add New Job Application</h1>

      <form action="">

        </form>

    </div>
    </>
  )
}

export default AddNewJob
