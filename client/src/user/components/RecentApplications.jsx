import React from 'react'
import { Link } from 'react-router-dom'

const RecentApplications = ({ userData }) => {
    return (
        <>
        <div className='px-6 md:px-12 lg:px-24 xl:px-32 my-40'>

            <h1 className='text-2xl md:text-4xl font-semibold mb-10'>Recent Applications</h1>

            <table className='w-full text-left border-l-4 border-r-4 border-gray-200'>
                <thead className='bg-gray-200'>
                    <tr>
                        <th className='px-4 py-2 text-lg md:text-xl tracking-wider'>Job Title</th>
                        <th className='px-4 py-2 text-lg md:text-xl tracking-wider'>Company</th>
                        <th className='px-4 py-2 text-lg md:text-xl tracking-wider'>Location</th>
                        <th className='px-4 py-2 text-lg md:text-xl tracking-wider'>Job Type</th>
                        <th className='px-4 py-2 text-lg md:text-xl tracking-wider'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-4 pt-2'>Intern Developer</td>
                        <td className='px-4 pt-2'>Afroel Tech</td>
                        <td className='px-4 pt-2'>Addis Ababa</td>
                        <td className='px-4 pt-2'>Full-time</td>
                        <td className='px-4 pt-2'>Applied</td>
                    </tr>
                    <tr>
                        <td className='px-4 pt-2'>Intern Developer</td>
                        <td className='px-4 pt-2'>Afroel Tech</td>
                        <td className='px-4 pt-2'>Addis Ababa</td>
                        <td className='px-4 pt-2'>Full-time</td>
                        <td className='px-4 pt-2'>Applied</td>
                    </tr>
                </tbody>
            </table>

            <button
            className='border w-64 py-2 mt-10 md:text-xl font-medium border border-[#02A9EB]
            hover:text-gray-200 hover:bg-gradient-main rounded-lg'>
                <Link to={`/user/jobs/${userData.uid}`}>
                    View All Applications
                </Link>
            </button>

        </div>
        </>
    )
}

export default RecentApplications
