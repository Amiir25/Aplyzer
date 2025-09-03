import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockFour, faFileLines, faUserCheck, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { assets, statusSummery } from '../../assets/assets';

const StatusSummery = ({ jobs }) => {

    const total = jobs;
    const interviewed = jobs.filter(job => job.status === 'Interviewed');
    const rejected = jobs.filter(job => job.status === 'Rejected');
    const waiting = jobs.filter(job => job.status === 'Waiting' || job.status === 'Applied');

    // Colors for Summeries
    const summeryColor = {
        Total: 'sky-500',
        Interviewed: 'green-500',
        Rejected: 'red-500',
        Waiting: 'amber-500',
    }

    // Data for Summeries
    const summeryData = {
        Total: jobs,
        Interviewed: interviewed,
        Rejected: rejected,
        Waiting: waiting,
    }

    return (
        <>
        <div className='px-6 md:px-12 lg:px-24 xl:px-32 mt-10 my-20'>
            <h1 className='text-2xl md:text-4xl font-semibold mb-8'>Stats Summery</h1>
            
            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-10'>
                {
                    statusSummery.map((summery, i) => (
                        <div key={i}
                        className={`min-h-68 w-fit px-4 py-2 shadow-xl border-t-6 border-${summeryColor[summery.title]}`}>
                            
                            <p className={`w-fit text-7xl mx-auto my-8 font-black bg-${summeryColor[summery.title]}/20
                            px-2 text-${summeryColor[summery.title]}`}>
                                { summeryData[summery.title].length }
                            </p>
                            {/* <img src={ summery.image } alt={`${summery.title} Image`} className='w-full h-[100px] mx-auto m-2'/> */}
                            <div>
                                <h1 className='text-2xl font-bold'>{ summery.title }</h1>
                                <p className='text-gray-700 text-sm'>{ summery.desc }</p>
                            </div>
                            <button>
                                See More
                            </button>
                        </div>
                    ))
                }

                

            </div>
        </div>
        </>
    )
}

export default StatusSummery;
