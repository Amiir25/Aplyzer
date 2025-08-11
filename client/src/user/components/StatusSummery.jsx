import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockFour, faFileLines, faUserCheck, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { assets } from '../../assets/assets';

const StatusSummery = ({ jobs }) => {

    const interviewed = jobs.filter(job => job.status === 'Interviewed');
    const rejected = jobs.filter(job => job.status === 'Rejected');
    const waiting = jobs.filter(job => job.status === 'Waiting' || job.status === 'Applied');

    return (
        <>
        <div className='px-6 md:px-12 lg:px-24 xl:px-32 mt-10 my-20'>
            <h1 className='text-2xl md:text-4xl font-semibold mb-8'>Stats Summery</h1>
            
            {/* Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                {/* Total */}
                <div className='relative h-64 w-fit px-4 py-2 shadow-xl border-t-6 border-sky-500'>
                    <img src={ assets.file } alt="3D File Icon" className='w-1/3 mx-auto m-2'/>
                    <div>
                        <h1 className='text-2xl font-bold'>Total</h1>
                        <p className='text-gray-700 text-sm'>All applications you've submitted so far.</p>
                    </div>
                    <p className='absolute bottom-4 left-4 mt-2 text-xl font-black bg-sky-500/20 w-fit 
                    px-2 text-sky-500'>
                        { jobs.length }
                    </p>
                </div>
                
                {/* Interviwed */}
                <div className='relative h-64 w-fit px-4 py-2 shadow-xl border-t-6 border-green-500'>
                    <img src={ assets.user } alt="3D File Icon" className='w-1/3 mx-auto m-2'  />
                    <div>
                        <h1 className='text-2xl font-bold'>Interviewed</h1>
                        <p className='text-gray-700 text-sm'>Applications that led to interviews.</p>
                    </div>
                    <p className='absolute bottom-4 left-4 mt-2 text-xl font-black bg-green-500/20 w-fit px-2
                        text-green-500'>
                        { interviewed.length }
                    </p>
                </div>

                {/* Rejected */}
                <div className='relative h-64 w-fit px-4 py-2 shadow-xl border-t-6 border-red-500'>
                    <img src={ assets.x } alt="3D File Icon" className='w-1/3 mx-auto m-2'  />
                    <div>
                        <h1 className='text-2xl font-bold'>Rejected</h1>
                        <p className='text-gray-700 text-sm'>Applications that were declined or marked unsuccessful.</p>
                    </div>
                    <p className='absolute bottom-4 left-4 mt-2 text-xl font-black bg-red-500/20 w-fit px-2
                        text-red-500'>
                        { rejected.length }
                    </p>
                </div>

                {/* Waiting */}
                <div className='relative h-64 w-fit px-4 py-2 shadow-xl border-t-6 border-amber-500'>
                    <img src={ assets.clock } alt="3D File Icon" className='w-1/3 mx-auto m-2'  />
                    <div>
                        <h1 className='text-2xl font-bold'>Waiting</h1>
                        <p className='text-gray-700 text-sm'>Applications with no response yet or still in progress.</p>
                    </div>
                    <p className='absolute bottom-4 left-4 mt-2 text-xl font-black bg-amber-500/20 w-fit px-2
                        text-amber-500'>
                        { waiting.length }
                    </p>
                </div>

            </div>
        </div>
        </>
    )
}

export default StatusSummery;
